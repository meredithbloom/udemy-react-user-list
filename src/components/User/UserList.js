import React from 'react'
import UserItem from './UserItem'
import Card from '../UI/Card'
import './UserList.css'


const UserList = (props) => {

    if (props.users.length === 0) {
        return <h2>No users found.</h2>
    }

    return (
        <Card>
             <ul className='user-list'>
                {props.users.map((user) => (
                    <UserItem
                        key={user.id}
                        user={user}
                    />
                ))}
            </ul>
        </Card>
       
    )
    

}

export default UserList