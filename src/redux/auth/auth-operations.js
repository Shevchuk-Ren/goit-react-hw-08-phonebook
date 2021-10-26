import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `bearer is ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    console.log(data, `data`);
    token.set(data.token);
    return data;
  } catch (error) {
    // dispatch(fetchPhonebookError(error))
    console.log(error);
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  console.log(credentials, `crenditials`);
  console.log(axios.defaults, `url`);

  try {
    const { data } = await axios.post(`/users/login`, credentials);
    console.log(data, `data`);
    token.set(data.token);
    token.unset();
    return data;
  } catch (error) {
    // dispatch(fetchPhonebookError(error))
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    const { data } = await axios.post('/users/logout');
    return data;
  } catch (error) {
    // dispatch(fetchPhonebookError(error))
  }
});

// const getCurrentUser = () => async (dispatch, getState) => {
//   const {
//     auth: { token: persistedToken },
//   } = getState();

//   if (!persistedToken) {
//     return;
//   }

//   token.set(persistedToken);
//   dispatch(getCurrentUserRequest());

//   try {
//     const response = await axios.get('/users/current');

//     dispatch(getCurrentUserSuccess(response.data));
//   } catch (error) {
//     dispatch(getCurrentUserError(error.message));
//   }
// };

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    console.log(thunkAPI, `APICURR`);
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {}
  },
);

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};
export default authOperations;
