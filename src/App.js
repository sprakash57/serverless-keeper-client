import React, { useState } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AppContext } from './libs/context';
import Routes from './Routes';
import './App.css';

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  function handleLogout() {
    userHasAuthenticated(false);
  }
  return (
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
