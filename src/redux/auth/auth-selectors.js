const getUsername = state => {
  console.log(state, `getusername`);
  return state.auth.user.name;
};
const getLoggedIn = state => {
  console.log(state, `loggedin`);
  return state.auth.isLoggedIn;
};
const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getUsername,
  getLoggedIn,
  getIsFetchingCurrent,
};
export default authSelectors;
