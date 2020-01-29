import React, { useState } from 'react';

const Signup = props => {
    const [userInput, setUserInput] = useState({username: '', password: '', department: ''});

    const handleChange = e => {
        setUserInput({...userInput, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        //console.log(props.history);
        const push = props.history.push();
        props.registerUser(userInput, props.history.push);
    }

    return (
        <div>
             
            <form onSubmit={handleSubmit}>
                <legend>Sign up at the Department Depot</legend>

                <label htmlFor='username'>Username:</label>
                <input type='text'
                    placeholder='username'
                    name='username'
                    id='username'
                    value={userInput.username}
                    onChange={handleChange}
                />
                
                <label htmlFor='password'>Password:</label>
                <input type='password'
                    name='password'
                    id='password'
                    placeholder='********'
                    value={userInput.password}
                    onChange={handleChange}
                />

                <label htmlFor='department'>Department:</label>
                <input type='text'
                    placeholder='department'
                    name='department'
                    id='department'
                    value={userInput.department}
                    onChange={handleChange}
                />

                <button type='submit'>Submit</button>


            </form>

            
        </div>
    )
}

export default Signup;

//TODO: Add once props are set up:
//{!props.isRegistered &&

//{props.isRegistered && <h2 className='welcome'>Welcome, {props.username}!</h2>}