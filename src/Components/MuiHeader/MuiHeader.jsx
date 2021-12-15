import { Box } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";

const MuiHeader = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "80vh",
          background: "url(images/header.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "flex-start",
            textAlign: 'start',
            height: '90vh',
            ml: 3,
            background: 'background: linear-gradient(to left, rgba(255,0,0,0), rgb(0 0 0 / 13%))',

          }}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: '35px', pt: 15, color: "white", fontWeight: "bold", textShadow: '2px #232323'
            
        }}
          >
            WELLCOME TO ZANTE, MODERN ROOMS
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontSize: '35px', color: "white", fontWeight: "bold",
            
        }}
          >
            FIVE STAR LUXURY HOTEL
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default MuiHeader;
