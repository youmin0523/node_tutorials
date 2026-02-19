import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import loginReducer from './slices/loginSlice';

const store = configureStore({
  reducer: combineReducers({
    auth: authReducer,
    login: loginReducer,
  }),
});

export default store;
