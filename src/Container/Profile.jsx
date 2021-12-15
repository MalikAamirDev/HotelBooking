import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import MButton from "../Components/MButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import AppBar from "../Components/AppBar";
import NavBar from './../Components/AppBar/NavBar';
import { Box } from "@mui/system";
import { Paper, Typography } from "@mui/material";
import { db, collection, getDocs } from "../Config/Firebase";
import { useDispatch } from "react-redux";


export default function Deshboard({ currentUser }) {
  const bookingData = useSelector((state) => state.bookingReducer);
  const getRData = useSelector((state) => state.loginReducer);
  const userStatus = useSelector((user) => user.UserStatusReducer);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();




  const colRef = collection(db, "Bookings"); 
  const getData = () => {
    getDocs(colRef)
      .then((snapshot) => {
        let tempData = [];
        tempData = snapshot.docs.map((e, i) => ({
          id: e.id,
          data: e.data(),
        }));
        dispatch({
          type: "BOOKINGDATA",
          bookingData: tempData,
        });
        setUserData(tempData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    if (userStatus === true) {
      setLoader(false);
    } else {
      console.log("please login");
      navigate("/login");
    }
    getData()
  }, [navigate, userStatus]);

  console.log(getRData.userData);
  // console.log(userStatus);
  // console.log(bookingData);
  const userSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        
      })
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
        <NavBar/>
          <div>
            <h2>Welcome, {getRData.userData[1].name}</h2>
            <MButton onClick={userSignOut} value="Sign Out" />
          </div>
          <Box
          component="div"
          width='100%'
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
          >
            <Paper
              sx={{
                py: 3,
                px: 5
              }}
            >
              <Typography variant="h5" color="initial">
                Profile Info
              </Typography>
              <Typography variant="subtitle2" color="initial">
                Name: {getRData.userData[1].name}
              </Typography>
              <Typography variant="subtitle2" color="initial">
                Contact: {getRData.userData[1].contact}
              </Typography>
              <Typography variant="subtitle2" color="initial">
                email: {getRData.userData[1].email}
              </Typography>
              
            </Paper>
          </Box>
        </>
      )}
    </>
  );
}
