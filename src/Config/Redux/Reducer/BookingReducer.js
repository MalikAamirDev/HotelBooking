const INITIAL_STATE = {
  label: "Booking Data Here",
  bookingData: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GETBOOKINGDATA":
      return { ...state, bookingData: action.bookingData };
    default:
      return state;
  }
};
export default reducer;
