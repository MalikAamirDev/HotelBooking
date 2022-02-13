import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  const navigate = useNavigate();
  return (
    <Drawer anchor="right" open={openDrawer} sx={{ width: 400 }}>
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
        <ListItem>
          <Button
            sx={{
              background: "primary",
              color: "primary.text",
              ":hover": {
                background: "var(--hover)",
              },
              px: 5,
              py: 1.5,
              borderRadius: 10,
              letterSpacing: "2px",
            }}
            // disableElevation
            onClick={() => navigate("/booking")}
            variant="contained"
            // color="secondary"
            startIcon={<EventAvailableIcon />}
          >
            Book Online
          </Button>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
