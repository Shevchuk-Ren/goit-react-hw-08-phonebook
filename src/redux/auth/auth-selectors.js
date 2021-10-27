const getIsLoggedIn = state => {
  console.log(state, `STATE`);
  return state.auth.isLoggedIn;
};

const getUsername = state => {
  console.log(state, `STATE`);
  return state.auth.user.name;
};

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrent,
};

export default authSelectors;
