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

  const handleBooking = ()=>{
    navigate('/booking')
  }


  return (
    <Card
      sx={{
        minWidth: 345,
        maxWidth: 345,
        maxHeight: 400,
        minHeight: 400,
        pb: 4,
        m: 2,
      }}
    >
      <CardMedia
        component="img"
        height="200"
        sx={{ objectFit: "cover", m: 0, p: 0}}
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          sx={{ fontWeight: "bold" }}
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
        width= '100%'
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        
      >
        <Button
          variant="text"
          onClick={handleBooking}
          sx={{ px: 5, background: "#ef3f49", color: "white" ,
          ':hover': {
            background: "#bc1019",
          }
        }}
        >
          Book Now
        </Button>
      </CardActions>
    </Card>
  );
}
