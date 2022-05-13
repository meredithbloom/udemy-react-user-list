import React, {useState} from "react";
import './NewUserForm.css'
import Card from "../UI/Card";

const NewUserForm = (props) => {

    const [enteredUser, setEnteredUser] = useState('')
    const [enteredAge, setEnteredAge] = useState('')


    const handleUserChange = (event) => {
        setEnteredUser(event.target.value)
    }

    const handleAgeChange = (event) => {
        setEnteredAge(event.target.value)
    }


    const submitHandler = (event) => {
        event.preventDefault()
        const userData = {
            id: Math.random().toString(),
            name: enteredUser,
            age: enteredAge
        }
        props.onAddUser(userData)
        setEnteredAge('')
        setEnteredUser('')
    }

    return (
        <Card>
            <form onSubmit={submitHandler} className='new-user'>
                <div>
                    <div>
                        <label>Username</label><br/>
                        <input type="text" value={enteredUser} onChange={handleUserChange}/>
                    </div>
                    <div>
                        <label>Age (Years)</label><br/>
                        <input type="number" value={enteredAge} onChange={handleAgeChange}/>
                    </div>
                    <div>
                        <button type="submit">Add User</button>
                    </div>
                </div>
            </form>  
        </Card>
    )

}

export default NewUserForm