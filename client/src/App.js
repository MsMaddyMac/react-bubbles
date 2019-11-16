import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// component imports
import PrivateRoute from './components/PrivateRoute';
import Welcome from './components/Welcome';
import Login from './components/Login';
import MyAccount from './components/MyAccount';
// styling imports
import './styles.scss';



function App() {
    
  // logout function
  const logout = () => {
    localStorage.removeItem('token');
  }

  return (
    <Router>
      <div className='App'>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
          <Link to='/account'>My Account</Link>
          <Link to='/' onClick={logout}>Logout</Link>
        </nav>
      
          <Route exact path='/' component={Welcome} />
          <Route exact path='/login' component={Login} />
        <Switch>
          <PrivateRoute exact path='/account' component={MyAccount} />
        </Switch>
      </div>
    </Router>
  );
}

export default App
