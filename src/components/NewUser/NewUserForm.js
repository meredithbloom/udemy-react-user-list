import React, {useState} from "react";
import './NewUserForm.css'

const NewUserForm = (props) => {

    const [enteredUser, setEnteredUser] = useState('')
    const [enteredAge, setEnteredAge] = useState('')


    const handleUserChange = (event) => {
        setEnteredUser(event.target.value)
    }

    const handleAgeChange = (event) => {
        setEnteredAge(event.target.value)
    }





    return (
        <div>
            <form>
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
        </div>
    )

}

export default NewUserForm