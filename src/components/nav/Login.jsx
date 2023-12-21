import React, { useState } from "react";
import '../../styles/header.css';
import '../../styles/nav/login.css';


const Login = ({ onClose }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
  
    const handleLogin = () => {
      // Lógica de inicio de sesión
      onClose();
    };
  
    return (
      <div className="login-modal">
        <div className="login-content">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username"></label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password"></label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <div className="form-group remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <div className="login-buttons">
              <button className="button-login" type="button" onClick={handleLogin}>
                Login
              </button>
              <button className="button-cancel" type="button" onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;