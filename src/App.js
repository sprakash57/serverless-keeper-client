import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { AppContext } from './libs/context';
import Routes from './Routes';
import './App.css';
import { onError } from './libs/errorLib';

function App() {
  const [isAuthenticating, setAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const history = useHistory();

  async function handleLogout() {
    await Auth.signOut()
    userHasAuthenticated(false);
    history.push("/login");
  }

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    } catch (error) {
      if (error !== 'No current user') onError(error);
    }
    setAuthenticating(false);
  }

  useEffect(() => {
    onLoad();
  }, [])

  return (
    !isAuthenticating &&
    <div className="App container">
      <Navbar collapseOnSelect className="bg-light">
        <Navbar.Brand>
          <Link to="/">Keeper</Link>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            {isAuthenticated
              ? <NavItem onClick={handleLogout}><Link to="/login">Logout</Link></NavItem>
              : <>
                <NavItem>
                  <Link to="/signup">Signup</Link>
                </NavItem>
                <NavItem className="ml-2">
                  <Link to="/login">Login</Link>
                </NavItem>
              </>
            }
          </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </Navbar>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes />
      </AppContext.Provider>
    </div>
  );
}

export default App;
