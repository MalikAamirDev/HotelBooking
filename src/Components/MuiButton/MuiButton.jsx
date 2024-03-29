import React from "react";
import Button from "@mui/material/Button";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
const MuiButton = ({ variant, color, xs, value, onClick, elevation }) => {
  const xStyle = { px: 2 };
  return (
    <>
      <Button
        elevation={elevation}
        variant={variant}
        color={color}
        sx={xs}
        startIcon={ShoppingBasketIcon}
        onClick={onClick}
      >
        {value}
      </Button>
    </>
  );
};

export default MuiButton;
