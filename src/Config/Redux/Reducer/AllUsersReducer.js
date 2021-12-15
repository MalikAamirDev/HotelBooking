const INITIAL_STATE = {
    label: "All Users",
    allUsersData: []
      
  };
  
  const reducer =  (state = INITIAL_STATE, action) => {
    console.log(action.allUsersData)
    switch (action.type) {
      case "ALLUSERS":
        // action.uid = state.signupreducer.uid;
        // return state.signupreducer.uid;
        return { ...state, allUsersData: action.allUsersData };
      default:
        return state;
    }
  
  };
  export default reducer;