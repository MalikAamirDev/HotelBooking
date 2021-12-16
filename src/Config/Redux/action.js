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
        // console.log(err.message);
      });
  };
};

const getBookingData = (getDoc, docRef, setLoader) => {
  return (dispatch) => {
    getDoc(docRef)
      .then((singleDoc) => {
        let booking = [singleDoc.id, singleDoc.data()];
        dispatch({
          type: "GETBOOKINGDATA",
          bookingData: booking,
        });
        setLoader(false);
      })
      .catch((err) => {
        // console.log(err.message);
      });
  };
};

export { gethotelListings, getBookingData };
