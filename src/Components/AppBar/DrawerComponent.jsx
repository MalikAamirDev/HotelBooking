import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  const navigate = useNavigate();
  return (
    <Drawer anchor="right" open={openDrawer}>
      <List>
        <ListItem divider>
          <IconButton
            aria-label=""
            sx={{
              backgroundColor: "#efefef",
            }}
            onClick={() => setOpenDrawer(false)}
          >
            <CloseIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </ListItem>
        <ListItem divider button>
          <ListItemIcon onClick={() => navigate("/")}>
            <ListItemText style={{ textDecoration: "none", color: "#616161" }}>
              Home
            </ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button>
          <ListItemIcon onClick={() => navigate("/booking")}>
            <ListItemText style={{ textDecoration: "none", color: "#616161" }}>
              Booking
            </ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button>
          <ListItemIcon onClick={() => navigate("/dashboard")}>
            <ListItemText style={{ textDecoration: "none", color: "#616161" }}>
              Dashboard
            </ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button>
          <ListItemIcon onClick={() => navigate("/dashboard")}>
            <ListItemText style={{ textDecoration: "none", color: "#616161" }}>
              Profile
            </ListItemText>
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
