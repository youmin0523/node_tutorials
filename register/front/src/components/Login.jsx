import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <div>
        <h2>Login</h2>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email..."
              name="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Your Password..."
              name="password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div>
          <span>Still Don't Have Account ?</span>
          <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
