import React, { useState } from 'react';
import Login from './nav/Login';
import Register from './nav/Register';
import '../styles/header.css';

const Header = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  const openLoginModal = () => {
    setLoginOpen(true);
  };

  const closeLoginModal = () => {
    setLoginOpen(false);
  };

  const openRegisterModal = () => {
    setRegisterOpen(true);
  };

  const closeRegisterModal = () => {
    setRegisterOpen(false);
  };

  return (
    <header className="header">
      <div className="nav">
        <nav className="nav-container">
          <ul>
            <li type="button" className="boton-Register" onClick={openRegisterModal}>
              Register
            </li>
            <li type="button" className="boton-Login" onClick={openLoginModal}>
              Login
            </li>
          </ul>
        </nav>
      </div>
      <div className="logo-container">
        <h1>Character & Episodes Collector</h1>
        <p>Welcome to the Interactive World of Rick and Morty</p>
      </div>

      {isLoginOpen && <Login onClose={closeLoginModal} />}
      {isRegisterOpen && <Register onClose={closeRegisterModal} />}
    </header>
  );
};

export default Header;