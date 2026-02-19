import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPostRegisterData } from '../redux/slices/authSlice';

const Register = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const [value, setValue] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handelFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (value.username === '' || value.email === '' || value.password === '') {
      alert('Please fill all the fields, All Fields are required!');
    }

    const formData = new FormData();
    formData.append('username', value.username);
    formData.append('email', value.email);
    formData.append('password', value.password);

    if (file) {
      formData.append('profile_image', file);
    }

    try {
      const response = await dispatch(fetchPostRegisterData(formData)).unwrap();
      // console.log(response);
      if (response.status === 201) {
        alert('회원가입이 완료되었습니다.');
        navigator('/login');
        return;
      }

      if (response.data.success === false) {
        alert(response.data.message);
        return;
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // console.log(value);
  // console.log(file);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="shadow-lg px-8 py-5 border w-100 rounded-md">
        <h2 className="text-lg font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="text-gray-700">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter Your Username..."
              name="username"
              className="w-full px-3 py-2 border"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email..."
              name="email"
              className="w-full px-3 py-2 border"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Your Password..."
              name="password"
              className="w-full px-3 py-2 border"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="profile_image" className="text-gray-700">
              Profile Image
            </label>
            <input
              type="file"
              name="profile_image"
              className="w-full"
              onChange={handelFileChange}
            />
          </div>
          <button type="submit" className="w-full bg-green-500 text-white py-2">
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
          <span className="text-gray-700">Already Have Account? | </span>
          <Link to="/login" className="text-blue-500 underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
