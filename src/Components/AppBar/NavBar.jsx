import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { useMediaQuery, useTheme, Stack } from "@mui/material";
import DrawerComponent from "./DrawerComponent";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState();
  const navigate = useNavigate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const move = () => {
    navigate("/booking");
  };
  return (
    <>
      <AppBar
        position="static"
        width="100%"
        elevation={0}
        sx={{
          background: "white",
          borderRadius: "0 0 20px 20px",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      >
        <Toolbar>
          <Box
            component="div"
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Box
                width="100px"
                sx={{ cursor: "pointer" }}
                component="img"
                onClick={() => navigate("/")}
                alt="banner"
                src={
                  "https://firebasestorage.googleapis.com/v0/b/jpakhackathon.appspot.com/o/zante.svg?alt=media&token=d9647b95-9c69-4fc5-a970-bb3b6d61f645"
                }
              />
            </Box>
            {matches ? (
              <DrawerComponent
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
              />
            ) : (
              <>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <Stack direction="row" spacing={2}>
                    <Typography sx={{ cursor: "pointer" }}>
                      <Link
                        style={{ textDecoration: "none", color: "#616161" }}
                        to="/"
                      >
                        Home
                      </Link>
                    </Typography>
                    <Typography sx={{ cursor: "pointer", color: "#616161" }}>
                      <Link
                        style={{ textDecoration: "none", color: "#616161" }}
                        to="/booking"
                      >
                        Booking
                      </Link>
                    </Typography>
                    <Typography sx={{ cursor: "pointer", color: "#616161" }}>
                      <Link
                        style={{ textDecoration: "none", color: "#616161" }}
                        to="/dashboard"
                      >
                        Dashboard
                      </Link>
                    </Typography>
                    <Typography sx={{ cursor: "pointer", color: "#616161" }}>
                      <Link
                        style={{ textDecoration: "none", color: "#616161" }}
                        to="/profile"
                      >
                        Profile
                      </Link>
                    </Typography>
                  </Stack>
                </Box>
              </>
            )}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
                  [theme.breakpoints.down("md")]: {
                    display: "none",
                  },
                }}
                // disableElevation
                onClick={move}
                variant="contained"
                // color="secondary"
                startIcon={<EventAvailableIcon />}
              >
                Book Online
              </Button>
              {matches ? (
                <IconButton aria-label="" onClick={() => setOpenDrawer(true)}>
                  <MenuIcon />
                </IconButton>
              ) : null}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
