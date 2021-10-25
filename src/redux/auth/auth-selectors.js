const getUsername = state => state.auth.user.name;
const getLoggedIn = state => {
  console.log(state);
  return state.auth.isLoggedIn;
};
const getIsAuthenticated = state => Boolean(state.auth.token);

const authSelectors = {
  getUsername,
  getLoggedIn,
};
export default authSelectors;
