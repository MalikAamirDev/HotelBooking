const INITIAL_STATE = {
  label: "Login Reducer Here",
  userData: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, userData: action.userData };
    default:
      return state;
  }
};
export default reducer;
