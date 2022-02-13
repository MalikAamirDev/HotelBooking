import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Avatar, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import MButton from "../Components/MButton";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { ListingData } from "../Config/Firebase";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import Notification from "../Components/Notification";

export default function BookingListingForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const formData = (e) => {
    e.preventDefault();
    const obj = {
      name,
      price,
      description,
      image,
    };
    dispatch(ListingData(obj, navigate, setNotify));
  };
  return (
    <div>
      {/* <NavBar /> */}
      <Grid container spacing={0}>
        <Paper
          elevation={3}
          sx={{ width: 300, padding: "30px 20px", margin: "10px auto" }}
        >
          <Grid align="center">
            <Avatar sx={{ backgroundColor: "#ef3f49" }}>
              <EventAvailableIcon />
            </Avatar>
            <h2 style={{ margin: 0 }}>Listing</h2>
          </Grid>
          <Grid>
            <Box component="form" align="start" onSubmit={(e) => formData(e)}>
              <TextField
                style={{ marginTop: 50 }}
                margin="dense"
                fullWidth
                name="name"
                id="name"
                label="Room Name"
                value={name}
                type="text"
                size="small"
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                fullWidth
                required
                margin="dense"
                id="price"
                label="Price"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                value={price}
                type="text"
                size="small"
                onChange={(e) => setPrice(e.target.value)}
              />
              <TextField
                fullWidth
                required
                margin="dense"
                id="description"
                label="Description"
                value={description}
                type="text"
                size="small"
                onChange={(e) => setDescription(e.target.value)}
              />
              <TextField
                fullWidth
                required
                margin="dense"
                id="image"
                label="Image Link"
                value={image}
                type="text"
                size="small"
                onChange={(e) => setImage(e.target.value)}
              />

              <MButton
                type="submit"
                value="Add"
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
      </Grid>
      <Notification notify={notify} setNotify={setNotify} />
    </div>
  );
}
