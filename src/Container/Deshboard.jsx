import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import MTable from "../Components/Table";
import { useDispatch } from "react-redux";
import { db, collection, getDocs } from "../Config/Firebase";
import NavBar from "../Components/AppBar/NavBar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Notification from "../Components/Notification";

export default function Profile() {
  const userStatus = useSelector((user) => user.UserStatusReducer);
  const adminUid = useSelector((user) => user.loginReducer);
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

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
        setNotify({
          isOpen: true,
          message: `${[err.message]} please check email & password`,
          type: "error",
        });
      });
  };

  useEffect(() => {
    if (
      userStatus === true &&
      adminUid.userData[0] === "ZCJOXpL3puN64Gv7zF07JPTZDEX2"
    ) {
      navigate("/deshboard");
    } else if (userStatus === true) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <NavBar />
      <Button sx={{ mt: 5 }} onClick={move} variant="outlined" color="primary">
        Add Listings
      </Button>
      <MTable userData={userData} />
      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
}
