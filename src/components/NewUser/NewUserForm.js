import React, {useState, useRef} from "react";
import './NewUserForm.css'
import Card from "../UI/Card";
import ErrorModal from './ErrorModal'
import Wrapper from "../Helpers/Wrapper";

const NewUserForm = (props) => {
    const nameInputRef = useRef()
    const ageInputRef = useRef()

    // const [enteredUser, setEnteredUser] = useState('')
    // const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()


    // const handleUserChange = (event) => {
    //     setEnteredUser(event.target.value)
    // }

    // const handleAgeChange = (event) => {
    //     setEnteredAge(event.target.value)
    // }


    const addUserHandler = (event) => {
        event.preventDefault()
        const enteredName = nameInputRef.current.value
        const enteredUserAge = ageInputRef.current.value
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).',
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).',
            });
            return;
        }
        props.onAddUser(enteredName, enteredUserAge)
        nameInputRef.current.value = ''
        ageInputRef.current.value = '' 
        // setEnteredAge('')
        // setEnteredUser('')
    }

    const errorHandler = () => {
        setError(null)
        // setEnteredAge('')
        // setEnteredUser('')
    }

    return (
        <>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            
            <Card>
                <form onSubmit={addUserHandler} className='new-user'>
                    <div>
                        <div>
                            <label>Username</label><br/>
                            <input
                                id="username"
                                type="text"
                                // value={enteredUserName}
                                // onChange={handleUserChange}
                                ref={nameInputRef}
                            />
                        </div>
                        <div>
                            <label>Age (Years)</label><br/>
                            <input
                                id="age"
                                type="number"
                                // value={enteredUserAge}
                                // onChange={handleAgeChange}
                                ref={ageInputRef}
                            />
                        </div>
                        <div>
                            <button type="submit">Add User</button>
                        </div>
                    </div>
                </form>  
            </Card>
        </>
    )

}

export default NewUserForm