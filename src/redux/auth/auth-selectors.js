const getIsLoggedIn = state => {
  console.log(state, `STATE`);
  return state.auth.isLoggedIn;
};

const getUsername = state => {
  console.log(state, `STATE`);
  return state.auth.user.name;
};

const authSelectors = {
  getIsLoggedIn,
  getUsername,
};

export default authSelectors;
