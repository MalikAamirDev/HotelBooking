const INITIAL_STATE = {
  label: "Hotel Listings Here",
  hotelListngs: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case "LISTINGDATA":
      return { ...state, hotelListngs: action.hotelListngs };
    default:
      return state;
  }
};
export default reducer;
