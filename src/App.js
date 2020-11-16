import React, { useState } from 'react';
import UserTable from './components/UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm'

function App() {

  const usersData = [
    {id:uuidv4(), name:'Pablo', username:'Pablo1234'},
    {id:uuidv4(), name:'Oscar', username:'Oscar1234'},
    {id:uuidv4(), name:'Lilly', username:'Lilly1234'},
]

//state
const [users, setUsers] = useState(usersData)


//add User
const addUser = (user) => {
  user.id = uuidv4()
  setUsers([
    ...users,
    user
  ])
}

//delete user
const deleteUser = (id) => {
 const filteredUsers= users.filter(user => user.id !== id)
 setUsers(filteredUsers)
}

const[editing , setEditing] = useState(false)

const [currentUser , setCurrentUser] = useState({
  id:null, name:"", username:""
})

const editRow = (user) => {
  setEditing(true)
  setCurrentUser({
    id: user.id, name:user.name, username:user.username
  })
}

const updateUser = (id, updateUser) =>{
  setEditing(false)

  setUsers(users.map(user => (user.id === id ? updateUser : user)))
}

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">

        {
          editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
              currentUser={currentUser}
              updateUser={updateUser}
              />
              </div>
          ):(
            <div>
            <h2>Add User</h2>
            <AddUserForm addUser={addUser}/>
            </div>
          )
         }
          
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable 
          users={users} 
          deleteUser={deleteUser}
          editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
