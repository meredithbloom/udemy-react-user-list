import React from 'react'
import UserItem from './UserItem'



const UserList = (props) => {

    if (props.users.length === 0) {
        return <h2>No users found.</h2>
    }

    return (
        <ul>
            {props.users.map((user) => (
                <UserItem
                    key={user.id}
                    user={user}
                />
            ))}
       </ul>
    )
    

}

export default UserList