import { clearToken } from '../redux/slices/loginSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user);
  // console.log(user);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    dispatch(clearToken());
  };

  const avatarLetter = user?.username?.charAt(0).toUpperCase() ?? 'U'; // user.username이 null 이면 U로 표시
  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold text-indigo-600 tracking-tight"
        >
          My Logo
        </Link>
        {user ? (
          <div className="relative">
            <button
              className="flex items-center gap-3 rounded-full cursor-default"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              <span className="text-sm font-medium text-gray-700">
                {user.username}
              </span>
              {user.profile_image ? (
                <img
                  src={user.profile_image}
                  alt={user.username}
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <span className="w-8 h-8 rounded-full bg-indigo-500 text-white font-semibold flex items-center justify-center">
                  {avatarLetter}
                </span>
              )}
              <svg
                className={`w-4 h-4 text-gray-400 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-3">
                  {user.profile_image ? (
                    <img
                      src={user.profile_image}
                      alt={user.username}
                      className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                    />
                  ) : (
                    <span className="w-8 h-8 rounded-full bg-indigo-500 text-white font-semibold flex items-center justify-center flex-shrink-0">
                      {avatarLetter}
                    </span>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {user.username}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{user.email}</p>
                  </div>
                </div>

                <button
                  className="w-full text-left px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 translation flex items-center gap-2"
                  onClick={handleLogout}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
                    />
                  </svg>
                  로그아웃
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            로그인
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
