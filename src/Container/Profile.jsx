import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import MButton from "../Components/MButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NavBar from "./../Components/AppBar/NavBar";
import { Box } from "@mui/system";
import { Paper, Typography } from "@mui/material";
import { db, getDoc, doc } from "../Config/Firebase";
import { useDispatch } from "react-redux";
import { getBookingData } from "../Config/Redux/action";

export default function Deshboard() {
  const bookingData = useSelector((state) => state.BookingReducer);
  const getRData = useSelector((state) => state.loginReducer);
  const userStatus = useSelector((user) => user.UserStatusReducer);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  // const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();

  let booking = bookingData.bookingData[1];

  let uid = getRData.userData[0];
  const getData = () => {
    const docRef = doc(db, "Bookings", uid);
    dispatch(getBookingData(getDoc, docRef, setLoader));
  };

  useEffect(() => {
    if (userStatus === true) {
      getData();
    } else {
      console.log("please login");
      navigate("/login");
    }
  }, [navigate, userStatus]);

  const userSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log("user Already Sign out");
      });
  };
  return (
    <>
      {loader ? (
        <div class="loader">Loading...</div>
      ) : (
        <>
          <NavBar />
          <div>
            <h2>Welcome, {booking.name}</h2>
            <MButton onClick={userSignOut} value="Sign Out" />
          </div>
          <Box
            component="div"
            width="100%"
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Paper
              sx={{
                py: 3,
                px: 5,
              }}
            >
              <Typography variant="h5" color="initial">
                Your Booking
              </Typography>
              <Typography variant="subtitle2" color="initial">
                Name: {booking.name}
              </Typography>
              <Typography variant="subtitle2" color="initial">
                Contact: {booking.contact}
              </Typography>
              <Typography variant="subtitle2" color="initial">
                Nights: {booking.nights}
              </Typography>
              <Typography variant="subtitle2" color="initial">
                email: {booking.email}
              </Typography>
            </Paper>
          </Box>
        </>
      )}
    </>
  );
}
