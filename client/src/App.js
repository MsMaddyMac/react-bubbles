import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { getToken } from './utils/axiosWithAuth';
// component imports
import PrivateRoute from './components/PrivateRoute';
import Welcome from './components/Welcome';
import Login from './components/Login';
import MyAccount from './components/MyAccount';
// styling imports
// import BubblesImage from './images/bubbles.jpg';
import './styles.scss';

function App() {
  const loggedIn = getToken();

  // logout function
  const logout = () => {
    localStorage.removeItem('token');
  }

  return (
    <Router>
      <div className='App'>
        <nav>
          <Link to='/'>Home</Link>
          {!loggedIn && <Link to='/login'>Login</Link>}
          {loggedIn && <Link to='/account'>My Account</Link>}
          <Link to='/' onClick={logout}>Logout</Link>
        </nav>
        {/* <img src={BubblesImage} alt="Bubbles" /> */}
        <Route exact path='/' component={Welcome} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/account' component={MyAccount} />
      </div>
    </Router>
  );
}

export default App
