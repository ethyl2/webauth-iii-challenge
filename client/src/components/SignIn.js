import React, { useState } from 'react';

const SignIn = props => {
    const [userInput, setUserInput] = useState({username: '', password: ''});

    const handleChange = e => {
        setUserInput({...userInput, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        const push = props.history.push;
        props.loginUser(userInput, push);
    }
    return (
        <div>
           
            <form onSubmit={handleSubmit}>
                <legend>Log in to See Your Department Team</legend>
                <div className='inner-form'>
                    <div>
                        <label htmlFor='username'>Username:</label>
                        <input type='text'
                            placeholder='username'
                            name='username'
                            id='username'
                            value={userInput.username}
                            onChange={handleChange}
                        />
                    </div>
                
                    <div>
                        <label htmlFor='password'>Password:</label>
                        <input type='password'
                            name='password'
                            id='password'
                            placeholder='********'
                            value={userInput.password}
                            onChange={handleChange}
                        />
                        </div>
                    </div>
                <button type='submit'>Submit</button>

            </form> 
        </div>
    )
}

export default SignIn;

// {!props.isLoggedIn && 

// {props.isLoggedIn && <h2 className='welcome'>Welcome back, {props.username}!</h2>}