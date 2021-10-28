import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      console.log(state, `state in slice to register`);
      console.log(action.payload, `payload in slice to register`);
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = false;
    },
    [authOperations.logIn.fulfilled](state, action) {
      console.log(state, `state in slice to login`);
      console.log(action.payload, `payload in slice to login`);
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state, action) {
      console.log(state, `state in slice to logout`);
      console.log(action.payload, `payload in slice to logout`);
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.refreshCurrentUser.pending](state, action) {
      console.log(state, `state in slice to refresh`);
      console.log(action.payload, `payload in slice to refresh`);

      state.isFetchingCurrentUser = true;
    },
    [authOperations.refreshCurrentUser.fulfilled](state, action) {
      console.log(state, `state in slice to refresh`);
      console.log(action.payload, `payload in slice to refresh`);
      state.user = { ...action.payload };
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.refreshCurrentUser.rejected](state, _) {
      console.log(state, `state in slice to refresh rejected`);

      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
