const INITIAL_STATE = {
  label: "All Users",
  allUsersData: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ALLUSERS":
      return { ...state, allUsersData: action.allUsersData };
    default:
      return state;
  }
};
export default reducer;
