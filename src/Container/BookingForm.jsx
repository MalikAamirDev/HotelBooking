import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import {
  Avatar,
  Paper,
  Typography,
  TextField,
  FormControl,
} from "@mui/material";

import { Box } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MButton from "../Components/MButton";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import NavBar from "../Components/AppBar/NavBar";
import { Booking } from "../Config/Firebase";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import Notification from "../Components/Notification";
import Footer from "../Components/footer";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [rooms, setRooms] = useState("");
  const [nights, setNights] = useState(1);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const [loader, setLoader] = useState(false);

  const formData = (e) => {
    e.preventDefault();
    const obj = {
      name,
      contact,
      rooms,
      nights,
      email,
    };
    dispatch(Booking(obj, navigate, setLoader, setNotify));
  };

  return (
    <div>
      <NavBar />
      {loader ? (
        <div className="loader">Loading...</div>
      ) : (
        <>
          <Box
            component="div"
            sx={{
              // background: '#ef3f49',
              backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/jpakhackathon.appspot.com/o/FormHeader.jpg?alt=media&token=c41482ae-55bd-4829-b139-381288003463')`,
              height: "90vh",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              // minHeight: '90vh',
            }}
          >
            <Grid container spacing={0}>
              <Paper
                elevation={3}
                sx={{ width: 300, padding: "30px 20px", margin: "10px auto" }}
              >
                <Grid align="center">
                  <Avatar sx={{ backgroundColor: "#ef3f49" }}>
                    <EventAvailableIcon />
                  </Avatar>
                  <h2 style={{ margin: 0 }}>BOOK ONLINE</h2>
                  <Typography variant="caption" color="initial">
                    Please fill up the booking form
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

                    <FormControl fullWidth margin="dense">
                      <InputLabel id="demo-simple-select-label">
                        Room
                      </InputLabel>
                      <Select
                        required
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={rooms}
                        label="Country"
                        align="start"
                        size="small"
                        onChange={(e) => setRooms(e.target.value)}
                      >
                        <MenuItem value="Single Room">Single Room</MenuItem>
                        <MenuItem value="Double Room">Double Room</MenuItem>
                        <MenuItem value="Delux Room">Delux Room</MenuItem>
                        <MenuItem value="King Room">King Room</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl fullWidth margin="dense">
                      <InputLabel id="demo-simple-select-label">
                        Nights
                      </InputLabel>
                      <Select
                        required
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={nights}
                        label="Country"
                        align="start"
                        size="small"
                        onChange={(e) => setNights(e.target.value)}
                      >
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                      </Select>
                    </FormControl>

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

                    <MButton
                      type="submit"
                      value="Book"
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
                  </Box>
                </Grid>
              </Paper>
              <Notification notify={notify} setNotify={setNotify} />
            </Grid>
          </Box>
        </>
      )}
      <Footer />
    </div>
  );
}
