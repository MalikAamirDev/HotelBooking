import React, { useEffect } from "react";
import NavBar from "../Components/AppBar/NavBar";
import { collection, getDocs, db } from "../Config/Firebase";
import ProductCard from "../Components/Product/ProductCards";
import { Box } from "@mui/system";
import MuiHeader from "../Components/MuiHeader/MuiHeader";
import { gethotelListings } from "../Config/Redux/action";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Components/footer";
import ExperienceSection from "../Components/ExperienceSection";
import Typography from "@mui/material/Typography";

export default function Home() {
  const hotelsData = useSelector((state) => state.hotelListReducer);
  const dispatch = useDispatch();

  let listing = hotelsData.hotelListingData;
  const colRef = collection(db, "Hotels");
  const getData = () => {
    dispatch(gethotelListings(getDocs, colRef));
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Box>
        <NavBar />
        <MuiHeader />
        <ExperienceSection />
        <Box
          component={"div"}
          sx={{
            background: "#F2FFFF",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              mb: 10,
              px: { sx: 10, md: 20, lg: 50 },
            }}
          >
            <Box>
              <Typography variant="h4" fontWeight={600} color="initial">
                Our Best Rooms
              </Typography>
              <Typography variant="body1" sx={{ my: 4 }} color="initial">
                Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
                fugit ea delectus, sed voluptatem. Laborum accusantium libero
                commodi id officiis itaque esse adipisci, necessitatibus
                asperiores, illo odio.
              </Typography>
            </Box>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {listing.map((data, i) => (
              <Box key={i}>
                <ProductCard
                  title={data.product.name}
                  price={data.product.price}
                  ratting={data.product.rating}
                  image={data.product.image}
                  description={data.product.description}
                  id={data.id}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
