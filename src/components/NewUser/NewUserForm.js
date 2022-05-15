import React, {useState, useRef} from "react";
import './NewUserForm.css'
import Card from "../UI/Card";
import ErrorModal from './ErrorModal'
import Wrapper from "../Helpers/Wrapper";

const NewUserForm = (props) => {
    const nameInputRef = useRef()
    const ageInputRef = useRef()

    const [enteredUser, setEnteredUser] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()


    const handleUserChange = (event) => {
        setEnteredUser(event.target.value)
    }

    const handleAgeChange = (event) => {
        setEnteredAge(event.target.value)
    }


    const addUserHandler = (event) => {
        event.preventDefault()
        if (enteredUser.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).',
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).',
            });
            return;
        }
        props.onAddUser(enteredUser, enteredAge)
        setEnteredAge('')
        setEnteredUser('')
    }

    const errorHandler = () => {
        setError(null)
        setEnteredAge('')
        setEnteredUser('')
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
                                type="text"
                                value={enteredUser}
                                onChange={handleUserChange}
                            />
                        </div>
                        <div>
                            <label>Age (Years)</label><br/>
                            <input
                                type="number"
                                value={enteredAge}
                                onChange={handleAgeChange}
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