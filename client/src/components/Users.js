import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

const Users = props => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        axiosWithAuth()
            .get('http://localhost:5000/api/users')
            .then(response => {
                console.log(response);
                setUsers(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div className='users-page'>
            {!users && <h2>Sign up or log on to see your department</h2>}
            {users && <h2>{users[0].department.toUpperCase()}</h2>}
            <div className='users-box'>
                {users && users.map(user => {
                    return (
                        <div className='user-box' key={user.id}>
                            <h3>{user.username}</h3>
                            <p>ID: {user.id}</p>
                            <p>department: {user.department}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Users;