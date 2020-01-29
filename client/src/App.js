import React, { useState } from 'react';
import './App.scss';
import { NavLink, Route } from 'react-router-dom';
import axios from 'axios';

import Signup from './components/Signup';
import Users from './components/Users';
import Home from './components/Home';
import SignIn from './components/SignIn';

function App(props) {
  const [user, setUser] = useState({username: '', password: '', department: ''})

  const registerUser = (user, push) => {
    axios.post('http://localhost:5000/api/register', user)
      .then(response => {
        console.log(response)
        setUser(response.data);
        localStorage.setItem('token', response.data.token);
        push('/users');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
       <h1>Department Depot</h1>
       <nav>
         <NavLink to='/home'>Home</NavLink>
         <NavLink to='/signup'>Sign Up</NavLink>
         <NavLink to='/signin'>Sign In</NavLink>
         <NavLink to='/users'>Users</NavLink>
       </nav>
      </header>

      <div className='main-content'>
        <Route exact path='/' component={Home} />
        <Route path='/signup' render={props => <Signup {...props} registerUser={registerUser} />} />
        <Route path='/signin' component={SignIn} />
        <Route path='/users' component={Users} /> 
      </div>

      <footer>
        <p>Copyright 2020 Heather Nuffer</p>
      </footer>

    </div>
  );
}

export default App;
//
// 
/*
<Route exact path='/' component={Home} />
        <Route path='/signup' component = {Signup} />
        <Route path='/signin' component={SignIn} />
        <Route path='/users' component={Users} />
*/