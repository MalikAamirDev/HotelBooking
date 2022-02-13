import { Box } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { useNavigate } from "react-router-dom";

const MuiHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          minHeight: "50vh",
          maxHeight: "60vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "start",
              height: "90vh",
              mt: "15vh",
              background:
                "background: linear-gradient(to left, rgba(255,0,0,0), rgb(0 0 0 / 13%))",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#ffffff30",
                borderRadius: "25px",
                px: 1,
                mb: 1,
              }}
            >
              <Typography variant="body1">⭐⭐⭐⭐⭐</Typography>
            </Box>
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                fontSize: "4rem",
                color: "white",
                fontWeight: "bold",
                textShadow: "2px #232323",
              }}
            >
              Welcome to Zante
            </Typography>
            <Typography marginY={3} variant="subtitle1" color={"white"}>
              Deleniti nostrum laboriosam praesentium quasi quam voluptate.
            </Typography>
            <Box
              sx={{
                backgroundColor: "#ffffff50",
                borderRadius: 10,
                p: 1,
              }}
            >
              <Button
                onClick={() => navigate("/booking")}
                variant="contained"
                startIcon={<EventAvailableIcon />}
                color="primary"
                sx={{
                  px: 5,
                  py: 1.5,
                  borderRadius: 10,
                  letterSpacing: "2px",
                  ":hover ": {
                    backgroundColor: "var(--hover)",
                  },
                }}
              >
                Book Now
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MuiHeader;
