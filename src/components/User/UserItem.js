import React from "react";
import './UserItem.css'


const UserItem = (props) => {

    return (
        <div className='user-item'>
            {props.user.name} ({props.user.age} years old)
        </div>
    )
}


export default UserItem