import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import MTable from "../Components/Table";
import { useDispatch } from "react-redux";
import { db, collection, getDocs } from "../Config/Firebase";
import NavBar from "../Components/AppBar/NavBar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const userStatus = useSelector((user) => user.UserStatusReducer);
  const adminUid = useSelector((user) => user.loginReducer);
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const move = () => {
    navigate("/listings");
  };

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
    if (
      userStatus === true &&
      adminUid.userData[0] === "ZCJOXpL3puN64Gv7zF07JPTZDEX2"
    ) {
      navigate("/deshboard");
      console.log("admin Loged in", adminUid[0]);
    } else if (userStatus === true) {
      navigate("/profile");
      console.log("user logedin", adminUid);
    } else {
      console.log("Please Signin", userStatus);
    }
    getData();
  }, []);
  return (
    <>
      <NavBar />
      <Button onClick={move} variant="text" color="primary">
        Add Listings
      </Button>
      <MTable userData={userData} />
    </>
  );
}
