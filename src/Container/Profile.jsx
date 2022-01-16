import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAuth, signOut, sendPasswordResetEmail } from "firebase/auth";
import MButton from "../Components/MButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NavBar from "./../Components/AppBar/NavBar";
import { Box } from "@mui/system";
import { Paper, Typography, TextField, Stack } from "@mui/material";
import { db, getDoc, doc, deleteDoc } from "../Config/Firebase";
import { useDispatch } from "react-redux";
import { getBookingData } from "../Config/Redux/action";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { red } from "@mui/material/colors";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Notification from "../Components/Notification";
import Dialog from "../Components/Dialog";
import Footer from "../Components/footer";

export default function Profile() {
  const bookingData = useSelector((state) => state.BookingReducer);
  const getRData = useSelector((state) => state.loginReducer);
  const userStatus = useSelector((user) => user.UserStatusReducer);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  let loginUser = getRData.userData[1];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let loginUserUid = getRData.userData[0];
  const cancelBooking = async () => {
    const docRef = doc(db, "Bookings", loginUserUid);
    await deleteDoc(docRef);
    window.location.reload();
  };
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

  const auth = getAuth();
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        setNotify({
          isOpen: true,
          message: "Logout Successfully",
          type: "success",
        });
      })
      .catch((error) => {
        setNotify({
          isOpen: true,
          message: "something went wrong",
          type: "error",
        });
        console.log(`${error} -user Already Sign out`);
      });
  };
  const resetPasswordEmail = () => {
    sendPasswordResetEmail(auth, loginUser.email)
      .then(() => {
        setNotify({
          isOpen: true,
          message: "email Sent successfully check your inbox please",
          type: "success",
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <>
      <Box>
        {loader ? (
          <div className="loader">Loading...</div>
        ) : (
          <>
            <NavBar />
            <div>
              <AccountCircleIcon
                sx={{
                  fontSize: "80px",
                  color: red[300],
                  textAlign: "center",
                  mt: 2,
                }}
              />
              <h2 style={{ margin: 0 }}>Welcome back, {loginUser.name}</h2>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography variant="subtitle1" color="initial">
                  Account Email:
                </Typography>

                <h3 style={{ margin: "0" }}>{loginUser.email}</h3>
              </Box>
              <MButton
                onClick={userSignOut}
                value="Sign Out"
                sx={{
                  color: red[600],
                  border: "2px solid #e53935",
                  px: 5,
                  mt: 2,
                  fontSize: "16px",
                }}
              />
            </div>

            <>
              <Box>
                <Paper
                  style={{
                    width: 500,
                    margin: "20px auto",
                    textAlign: "start",
                  }}
                >
                  <Tabs
                    // initialSelectedIndex={0}
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="Dashboard" />
                    <Tab label="Account" />
                  </Tabs>
                  <TabPanel value={value} index={0}>
                    {booking ? (
                      <Box
                        component="div"
                        sx={{ height: 278, fontWeight: "bold" }}
                      >
                        <Paper elevation={0}>
                          <Stack spacing={1}>
                            <Typography
                              variant="h5"
                              sx={{ fontWeight: "bold" }}
                              color="initial"
                            >
                              Your Booking
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              color="initial "
                              sx={{ fontWeight: "700", fontSize: "16px" }}
                            >
                              Name: {booking.name}
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              color="initial"
                              sx={{ fontWeight: "700", fontSize: "16px" }}
                            >
                              Contact: {booking.contact}
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              color="initial"
                              sx={{ fontWeight: "700", fontSize: "16px" }}
                            >
                              Nights: {booking.nights}
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              color="initial"
                              sx={{ fontWeight: "700", fontSize: "16px" }}
                            >
                              email: {booking.email}
                            </Typography>
                          </Stack>
                          <MButton
                            elevation={1}
                            onClick={cancelBooking}
                            value="Cancel Booking"
                            variant={"text"}
                            sx={{
                              marginTop: 2,
                              border: "1px solid  #e57373",
                              ":hover": {
                                backgroundColor: red[100],
                              },
                              color: red[500],
                            }}
                          />
                        </Paper>
                      </Box>
                    ) : (
                      <>
                        <Box
                          sx={{
                            background: red[100],
                            height: 150,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "10px",
                            flexDirection: "column",
                          }}
                        >
                          <h2>You don't have any bookings yut</h2>
                          <MButton
                            onClick={() => navigate("/")}
                            value="View Bookings"
                            sx={{
                              color: "#f9f9f9",
                              fontSize: "14px",
                              background: "#292C6D",
                              px: 2,
                              textTransform: "capitalize",
                              ":hover": {
                                background: "#161853",
                              },
                            }}
                          />
                        </Box>
                      </>
                    )}
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <h3>Preferences</h3>
                    <Box component="div" sx={{ position: "relative", mb: 2 }}>
                      <Dialog
                        placeholder={loginUser.name}
                        uid={uid}
                        style={{
                          position: "absolute",
                          right: 0,
                          top: 15,
                          width: 20,
                          height: 20,
                        }}
                      />
                      <TextField
                        id="name"
                        fullWidth
                        label="Full Name"
                        value={loginUser.name}
                        variant="standard"
                        InputProps={{
                          readOnly: true,
                        }}
                        sx={{
                          ".MuiInput-input": {
                            cursor: "pointer",
                          },
                        }}
                      />
                    </Box>
                    <TextField
                      id="contact"
                      fullWidth
                      label="Contact"
                      value={loginUser.contact}
                      variant="standard"
                      sx={{ mb: 2 }}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <TextField
                      id="Email"
                      fullWidth
                      label="Email"
                      value={loginUser.email}
                      variant="standard"
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <MButton
                      onClick={resetPasswordEmail}
                      value="reset password"
                      variant={"text"}
                      sx={{
                        fontSize: "13px",
                        textTransform: "capitalize",
                      }}
                    />
                    <Notification notify={notify} setNotify={setNotify} />
                  </TabPanel>
                </Paper>
              </Box>
            </>
          </>
        )}
      </Box>
      <Footer />
    </>
  );
}
