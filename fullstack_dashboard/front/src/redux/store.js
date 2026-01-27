import { combineReducers, configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: combineReducers({
    apis: apisReducer,
  }),
});

export default store;
