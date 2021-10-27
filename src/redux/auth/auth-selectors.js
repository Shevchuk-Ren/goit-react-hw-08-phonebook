const getIsLoggedIn = state => {
  console.log(state, `STATE`);
  return state.auth.isLoggedIn;
};

const getUsername = state => {
  console.log(state, `STATE`);
  return state.auth.user.name;
};

const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrentUser,
};

export default authSelectors;
