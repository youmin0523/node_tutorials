import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="shadow-lg px-8 py-5 border w-100 rounded-md">
        <h2 className="text-lg font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email..."
              name="email"
              className="w-full px-3 py-2 border"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Your Password..."
              name="password"
              className="w-full px-3 py-2 border"
            />
          </div>
          <button type="submit" className="w-full bg-green-500 text-white py-2">
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <span className="text-gray-700">Don't Have Account? | </span>
          <Link to="/register" className="text-blue-500 underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
