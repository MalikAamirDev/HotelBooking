const gethotelListings = (getDocs, colRef) => {
  return (dispatch) => {
    getDocs(colRef)
      .then((snapshot) => {
        let listings = [];

        listings = snapshot.docs.map((pData) => ({
          id: pData.id,
          product: pData.data(),
        }));
        dispatch({
          type: "LISTINGDATA",
          hotelListngs: listings,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};
const getBookingData = (getDocs, bookingRef) => {
  return (dispatch) => {
    getDocs(bookingRef)
      .then((snapshot) => {
        let bookings = [];

        bookings = snapshot.docs.map((pData) => ({
          id: pData.id,
          product: pData.data(),
        }));
        dispatch({
          type: "BOOKINGDATA",
          bookingData: bookings,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};

export { gethotelListings, getBookingData };
