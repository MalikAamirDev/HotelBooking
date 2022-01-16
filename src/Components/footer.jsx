import { Box } from "@mui/system";
import React from "react";

const footer = () => {
  return (
    <>
      <Box
        component="div"
        sx={{
          height: "30px",
          background: "#232323",
          color: "white",
          pt: 1.5,
          fontSize: "12px",
        }}
      >
        ©2021 Made with ❤️ by Malik Aamir
      </Box>
    </>
  );
};

export default footer;
