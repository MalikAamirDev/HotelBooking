const INITIAL_STATE = {
  label: "Hotel Listings Here",
  hotelListingData: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LISTINGDATA":
      state.hotelListingData = action.hotelListngs;
      return { ...state, ...action };
    default:
      return state;
  }
};
export default reducer;
