import React from "react";



const UserItem = (props) => {

    return (
        <div>
            {props.user.name} ({props.user.age} years old)
        </div>
    )
}


export default UserItem