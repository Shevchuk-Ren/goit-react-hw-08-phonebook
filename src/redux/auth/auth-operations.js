import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
console.log(axios.defaults, `AXIOS api`);

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    console.log(data, `data in register`);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error, `error register`);
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    console.log(data, `data in login`);
    console.log(axios.defaults, `defaults axios`);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error, `error in login`);
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    const { data } = await axios.post('/users/logout');
    console.log(`data in logout`);
    console.log(axios.defaults, `defaults axios logout`);
    token.unset();
  } catch (error) {
    console.log(error, `error in logout`);
  }
});

const refreshCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    console.log(thunkAPI.getState(), `thunkAPI in refresh`);
    const state = thunkAPI.getState();
    const tokenPersisted = state.auth.token;
    if (tokenPersisted === null) {
      console.log(`No token here`);
      return thunkAPI.rejectWithValue();
    }
    token.set(tokenPersisted);

    try {
      const { data } = await axios.get('/users/current');
      console.log(data, `response in refresh`);
      return data;
    } catch (error) {
      console.log(error, `error in refresh`);
    }
  },
);

const authOperations = {
  register,
  logIn,
  logOut,
  refreshCurrentUser,
};

export default authOperations;
