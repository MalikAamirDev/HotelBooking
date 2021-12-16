import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import {
  Avatar,
  Paper,
  Typography,
  FormLabel,
  TextField,
  FormControl,
  Checkbox,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Box } from "@mui/system";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MButton from "../Components/MButton";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { signUp } from "../Config/Firebase";
import { useSelector } from "react-redux";
import NavBar from "../Components/AppBar/NavBar";
import Notification from "../Components/Notification";

export default function Service() {
  const userStatus = useSelector((user) => user.UserStatusReducer);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (userStatus) {
      navigate("/");
      console.log("Already Signed in");
    } else {
      console.log("Please SignUp");
    }
  }, [navigate, userStatus]);
  console.log(userStatus);

  const formData = (e) => {
    e.preventDefault();
    const obj = {
      name,
      contact,
      gender,
      country,
      address,
      email,
      password,
    };
    console.log(obj);
    setLoader(true);
    dispatch(signUp(obj, navigate, setLoader, setNotify));
  };
  return (
    <div>
      <NavBar />
      {loader ? (
        <div class="loader">Loading...</div>
      ) : (
        <>
          <Grid container spacing={0}>
            <Paper
              elevation={3}
              sx={{ width: 300, padding: "30px 20px", margin: "10px auto" }}
            >
              <Grid align="center">
                <Avatar sx={{ backgroundColor: "#ef3f49" }}>
                  <AddCircleOutlineOutlinedIcon />
                </Avatar>
                <h2 style={{ margin: 0 }}>Sign Up</h2>
                <Typography variant="caption" color="initial">
                  Please fill up the form for account creation
                </Typography>
              </Grid>
              <Grid>
                <Box
                  component="form"
                  align="start"
                  onSubmit={(e) => formData(e)}
                >
                  <TextField
                    style={{ marginTop: 50 }}
                    margin="dense"
                    fullWidth
                    name="name"
                    id="name"
                    label="Name"
                    value={name}
                    type="text"
                    size="small"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    required
                    margin="dense"
                    id="contact"
                    label="Contact"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    value={contact}
                    type="text"
                    size="small"
                    onChange={(e) => setContact(e.target.value)}
                  />
                  <FormLabel component="legend" style={{ textAlign: "start" }}>
                    Gender
                  </FormLabel>
                  <RadioGroup
                    required
                    aria-label="gender"
                    defaultValue="female"
                    name="radio-buttons-group"
                    row
                    value={gender}
                    size="small"
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <FormControlLabel
                      value="female"
                      control={
                        <Radio
                          sx={{
                            color: red[500],
                            "&.Mui-checked": {
                              color: red[500],
                            },
                          }}
                          size="small"
                        />
                      }
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={
                        <Radio
                          sx={{
                            color: red[500],
                            "&.Mui-checked": {
                              color: red[500],
                            },
                          }}
                          size="small"
                        />
                      }
                      label="Male"
                    />
                  </RadioGroup>
                  <FormControl fullWidth margin="dense">
                    <InputLabel id="demo-simple-select-label">
                      Country
                    </InputLabel>
                    <Select
                      required
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={country}
                      label="Country"
                      align="start"
                      size="small"
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <MenuItem value="Pakistan">Pakistan</MenuItem>
                      <MenuItem value="Afghanistan">Afghanistan</MenuItem>
                      <MenuItem value="Iran">Iran</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    required
                    margin="dense"
                    fullWidth
                    id="address"
                    label="Address"
                    multiline
                    maxRows={3}
                    value={address}
                    type="text"
                    size="small"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <TextField
                    required
                    margin="dense"
                    fullWidth
                    id="email"
                    label="Email"
                    value={email}
                    type="email"
                    size="small"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    required
                    margin="dense"
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
                        required
                      />
                    }
                    label="I read the terms & conditions"
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
                  {/* </form> */}
                  <MButton
                    value="already have an account"
                    sx={{
                      marginTop: 1,
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#131313",
                    }}
                    onClick={() => navigate("/login")}
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
