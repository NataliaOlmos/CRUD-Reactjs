import React, {Fragment, useRef} from 'react';

import DownloadButton from './DownloadUsersList';


const UserTable = (props) => {
    const currentRef = useRef(null);
    console.log(props.users)
    return (
       
        <table ref={currentRef}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.length > 0 ?
                    props.users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                                <button className="button muted-button"
                                 onClick = {
                                     () => {props.editRow(user)}
                                 }>
                                    Edit</button>
                                <button className="button muted-button"
                                onClick={() => {props.deleteUser(user.id)}}
                                >
                                    Delete</button>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan={3}>No users</td>
                        </tr>
                    )
                }

            </tbody>
            <div><DownloadButton usedRef={currentRef} /></div>
        </table>
        
      
    )
}

export default UserTable