import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { v4 as uuidv4 } from 'uuid';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
console.log(axios.defaults.baseURL, `url`);
console.log(axios.defaults, `url`);
console.log(axios.defaults.baseURL, `url`);

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
    const { data } = await axios.post(
      'https://connections-api.herokuapp.com/users/signup',
      credentials,
    );
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
    const { data } = await axios.post(
      `https://connections-api.herokuapp.com/users/login`,
      credentials,
    );
    console.log(data, `data`);
    token.set(data.token);
    token.unset();
    return data;
  } catch (error) {
    // dispatch(fetchPhonebookError(error))
  }
});

const logOut = createAsyncThunk('/auth/logout', async () => {
  try {
    const { data } = await axios.post(
      `https://connections-api.herokuapp.com/users/logout`,
    );
    return data;
  } catch (error) {
    // dispatch(fetchPhonebookError(error))
  }
});

const authOperations = {
  register,
  logIn,
  logOut,
};
export default authOperations;
