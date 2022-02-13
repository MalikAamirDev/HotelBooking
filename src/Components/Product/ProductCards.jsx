import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  title,
  price,
  rooms,
  description,
  image,
  id,
}) {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/booking");
  };

  return (
    <Card
      sx={{
        Width: 350,
        maxWidth: 350,
        Height: 400,
        minHeight: 400,
        p: 1,
        pb: 2,
        m: 2,
        borderRadius: 2.5,
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
      elevation={0}
    >
      <CardMedia
        component="img"
        height="242px"
        sx={{ objectFit: "cover", m: 0, p: 0, borderRadius: 1.5 }}
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" fontWeight={600} component="div">
          {title}
        </Typography>
        <Typography
          sx={{ fontWeight: 600, color: "#64BC5F" }}
          variant="h6"
          color="text.secondary"
        >
          ${price}/nights
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions
        width="100%"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={handleBooking}
          disableElevation
          variant="contained"
          color="primary"
          sx={{
            width: "200px",
            px: 5,
            py: 1.5,
            borderRadius: 10,
            letterSpacing: "2px",
            textTransform: "none",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            ":hover ": {
              backgroundColor: "var(--hover)",
            },
          }}
        >
          Book Now
        </Button>
      </CardActions>
    </Card>
  );
}
