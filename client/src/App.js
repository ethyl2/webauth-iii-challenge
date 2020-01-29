import React from 'react';
import './App.scss';
import { NavLink, Route } from 'react-router-dom';

import Signup from './components/Signup';
import Signin from './components/Signin';
import Users from './components/Users';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Department Depot</h1>
      </header>

      <div className='main-content'>
        
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
        <Route path='/signin' component={Signin} />
        <Route path='/users' component={Users} />
*/