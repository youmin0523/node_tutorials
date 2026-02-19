import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from '../../utils/jwtDecode';

const initialToken = localStorage.getItem('token');
const decodedToken = initialToken ? jwtDecode(initialToken) : null;

const initialState = {
  token: initialToken || null,
  user: decodedToken,
  isAuthenticated: !!initialToken,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.user = jwtDecode(action.payload);
      state.isAuthenticated = true;
      localStorage.setItem('token', action.payload);
    },
    clearToken: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    },
  },
});

export const { setToken, clearToken } = loginSlice.actions;
export default loginSlice.reducer;
