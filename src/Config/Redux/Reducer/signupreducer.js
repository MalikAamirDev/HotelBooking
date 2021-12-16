const INITIAL_STATE = {
  label: "signup Reducer Here",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGNUPDATA":
      return action.uid, action.email;
    default:
      return state;
  }
};
export default reducer;
