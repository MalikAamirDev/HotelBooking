import React, { useEffect, useState } from "react";
import MTable from "../Components/Table";
import { useDispatch } from "react-redux";
import { db, collection, getDocs } from "../Config/Firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Notification from "../Components/Notification";
import { Box } from "@mui/system";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ViewDayOutlinedIcon from "@mui/icons-material/ViewDayOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddRoadOutlinedIcon from "@mui/icons-material/AddRoadOutlined";
import { BookingListingForm } from "../Config/router";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const userStatus = useSelector((user) => user.UserStatusReducer);
  const adminUid = useSelector((user) => user.loginReducer);
  const [userData, setUserData] = useState([]);
  const [addHotel, setAddHotel] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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
      navigate("/dashboard");
    } else if (userStatus === true) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dashboardPages = [
    {
      page: "Hotel Bookings",
      link: "dashboard",
      icon: <ViewDayOutlinedIcon />,
    },
    {
      page: "Add Hotel",
      link: "add-hotel",
      icon: <AddRoadOutlinedIcon />,
    },
  ];

  const dashboardRoutes = (link) => {
    if (link === "add-hotel") {
      setAddHotel(true);
      navigate(`/dashboard/${link}`);
    } else if (link === "dashboard") {
      setAddHotel(false);
      navigate("/dashboard");
    }
  };

  return (
    <>
      <Box
        sx={{
          height: "120vh",
          width: "100%",
          backgroundColor: "var(--azure)",
        }}
      >
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {dashboardPages.map((e, i) => (
              <ListItem button key={i} onClick={() => dashboardRoutes(e.link)}>
                <ListItemIcon>{e.icon}</ListItemIcon>
                <ListItemText primary={e.page} />
              </ListItem>
            ))}
            <ListItem
              sx={{
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#cccccc32",
                },
              }}
              onClick={() => navigate("/")}
            >
              <ListItemIcon>
                <HomeOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </List>
        </Drawer>
        <Box component={"main"} sx={{ flexGrow: 1, pt: 10, pl: 7 }}>
          {addHotel ? (
            <BookingListingForm />
          ) : (
            <>
              <Box>
                <Box
                  component={"div"}
                  sx={{
                    height: "100vh",
                    width: "100%",
                  }}
                >
                  <MTable userData={userData} />
                  <Notification notify={notify} setNotify={setNotify} />
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </>
  );
}
