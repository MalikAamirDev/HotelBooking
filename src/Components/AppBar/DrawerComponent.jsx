import React from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  return (
    <Drawer anchor="right" open={openDrawer}>
      <List>
        <ListItem divider button>
          <ListItemIcon onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link style={{ textDecoration: "none", color: "#616161" }} to="/">
                Home
              </Link>
            </ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button>
          <ListItemIcon onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link
                style={{ textDecoration: "none", color: "#616161" }}
                to="/booking"
              >
                Booking
              </Link>
            </ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <ListItemText>
              <Link
                style={{ textDecoration: "none", color: "#616161" }}
                to="/deshboard"
              >
                Deshboard
              </Link>
            </ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <ListItemText>
              <Link
                style={{ textDecoration: "none", color: "#616161" }}
                to="/profile"
              >
                Profile
              </Link>
            </ListItemText>
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
