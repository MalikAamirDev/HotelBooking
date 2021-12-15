import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Avatar, Paper, TextField, Checkbox } from "@mui/material";
import { Box } from "@mui/system";
import FormControlLabel from "@mui/material/FormControlLabel";
import MButton from "../Components/MButton";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { useDispatch } from "react-redux";
import { userLogin } from "../Config/Firebase";
import { useSelector } from "react-redux";
import Notification from "../Components/Notification";
import NavBar from "../Components/AppBar/NavBar";

export default function Login({ currentUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userStatus = useSelector((user) => user.UserStatusReducer);
  const adminUid = useSelector((user) => user.loginReducer);
  const [loader, setLoader] = useState(true);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  useEffect(() => {
    if (userStatus === true && adminUid[0] === "ZCJOXpL3puN64Gv7zF07JPTZDEX2") {
      navigate("/deshboard");
      console.log("Already Logged in", userStatus, adminUid[0]);
    } else if (userStatus === true) {
      navigate("/profile");
    } else {
      console.log("Please Signin", userStatus);
      setLoader(false);
    }
  }, [userStatus, navigate, adminUid]);

  const formData = (e) => {
    e.preventDefault();
    let obj = {
      email,
      password,
    };
    console.log(obj);
    setLoader(true);
    dispatch(userLogin(obj, navigate, setLoader, setNotify));
  };

  return (
    <div>
      {loader ? (
        <>
          <div class="loader">Loading...</div>
        </>
      ) : (
        <>
          <NavBar />
          <Grid container spacing={0}>
            <Paper
              elevation={3}
              sx={{ width: 300, padding: "30px 20px", margin: "10px auto" }}
            >
              <Grid align="center">
                <Avatar sx={{ bgcolor: red[500] }}>
                  <LoginOutlinedIcon />
                </Avatar>
                <h2 style={{ margin: 0 }}>Sign in</h2>
              </Grid>
              <Grid>
                <Box>
                  <form align="start" onSubmit={(e) => formData(e)}>
                    <TextField
                      margin="dense"
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      value={email}
                      type="email"
                      size="small"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                      margin="dense"
                      required
                      fullWidth
                      id="password"
                      label="Password"
                      value={password}
                      type="password"
                      size="small"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: red[500],
                            "&.Mui-checked": {
                              color: red[500],
                            },
                          }}
                          size="small"
                        />
                      }
                      label="Remember me"
                      fullWidth
                    />

                    <MButton
                      type="submit"
                      value="Sing Up"
                      sx={{
                        marginTop: 2,
                        backgroundColor: "#ef3f49",
                        ":hover": {
                          backgroundColor: "#cf252d",
                        },
                        color: "white",
                        width: 300,
                      }}
                    />
                  </form>

                  <MButton
                    value="create an account"
                    sx={{
                      marginTop: 1,
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#131313",
                    }}
                    onClick={() => navigate("/signup")}
                  />
                </Box>
              </Grid>
            </Paper>
            <Notification notify={notify} setNotify={setNotify} />
          </Grid>
        </>
      )}
    </div>
  );
}
