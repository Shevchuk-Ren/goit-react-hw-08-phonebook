const getUsername = state => {
  console.log(state, `getusername`);
  return state.auth.user.name;
};
const getLoggedIn = state => {
  console.log(state, `loggedin`);
  return state.auth.isLoggedIn;
};
const getIsAuthenticated = state => Boolean(state.auth.token);

const authSelectors = {
  getUsername,
  getLoggedIn,
};
export default authSelectors;
