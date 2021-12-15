const INITIAL_STATE = {
    label: "User Status",
    
      
  };
  
  const reducer =  (state = INITIAL_STATE, action) => {
    console.log(action.UserStatus)
    switch (action.type) {
      case "USERSTATUS":
        return (
          action.UserStatus
          );
      default:
        return state;
    }
  
  };
  export default reducer;