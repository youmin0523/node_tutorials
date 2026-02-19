import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { POST_AUTH_URL, POST_LOGIN_URL } from '../../utils/apiUrl';
import { postFormRequest, postRequest } from '../../utils/requestMethods';

// Register Function
const postRegisterFetchThunk = (actionType, apiURL) => {
  // console.log(actionType, apiURL);
  return createAsyncThunk(actionType, async (postData, { rejectWithValue }) => {
    try {
      const options = {
        method: 'POST',
        body: postData,
      };

      const response = await postFormRequest(apiURL, options);
      return response; // {status, data} 형태로 반환
    } catch (error) {
      // 에러시 상태 코드와 메시지를 포함한 값을 반환
      return rejectWithValue(error);
    }
  });
};

const postLoginFetchThunk = (actionType, apiURL) => {
  return createAsyncThunk(actionType, async (postData, { rejectedValue }) => {
    try {
      const options = {
        body: JSON.stringify(postData),
      };

      const response = await postRequest(apiURL, options);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  });
};

export const fetchPostRegisterData = postRegisterFetchThunk(
  'postRegisterFetchThunk',
  POST_AUTH_URL,
);

export const fetchPostLoginData = postLoginFetchThunk(
  'fetchPostLoginData',
  POST_LOGIN_URL,
);

const handleFulfilled = (stateKey) => (state, action) => {
  state[stateKey] = action.payload;
};

const handleRejected = (state, action) => {
  state.isError = true;
  state.errorMessage = action.payload?.msg || 'Error occurred unknown';
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    postAuthData: null,
    postLoginData: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostRegisterData.fulfilled, handleFulfilled('postAuthData'))
      .addCase(fetchPostRegisterData.rejected, handleRejected)

      .addCase(fetchPostLoginData.fulfilled, handleFulfilled('postLoginData'))
      .addCase(fetchPostLoginData.rejected, handleRejected);
  },
});

export default authSlice.reducer;
