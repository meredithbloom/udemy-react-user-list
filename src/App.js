import React, {useState} from 'react';
import UserList from './components/User/UserList';
import NewUserForm from './components/NewUser/NewUserForm';


const DUMMY_USERS = [ 
  { id:1, name: 'Meredith', age: 27 },
  { id:2, name: 'Ben', age: 26 },
  { id:3, name: 'Helen', age: 22 }
]


const App = () => {
  
  const [users, setUsers] = useState(DUMMY_USERS)
  
  
  const addUserHandler = (uName, uAge) => {
    setUsers(prevUsers => {
      return [
        ...prevUsers,
        { name: uName, age: uAge, id:Math.random().toString() }
      ]
    })
  }
  
  
  
  return (
    <div>
      <NewUserForm onAddUser={addUserHandler}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;
