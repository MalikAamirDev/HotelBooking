import React, { useEffect} from "react";
import NavBar from "../Components/AppBar/NavBar";
import { collection, getDocs, db } from "../Config/Firebase";
import ProductCard from "../Components/Product/ProductCards";
import { Box } from "@mui/system";
import MuiHeader from "../Components/MuiHeader/MuiHeader";
import { gethotelListings } from "../Config/Redux/action";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const hotelsData = useSelector((state) => state.hotelListReducer);
  const userData = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();

  const listing = hotelsData.hotelListngs
  
  const colRef = collection(db, "Hotels");
  const getData = () => {
    dispatch(gethotelListings(getDocs, colRef, dispatch));
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(listing);
  // console.log(listing);
  // console.log(userData.userData);

  return (
    <>
      <NavBar />
      <MuiHeader />
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {
            listing.map((data,i)=>(
              <ProductCard
              title={data.product.name}
              price={data.product.price}
              ratting={data.product.rating}
              image={data.product.image}
              description={data.product.description}
              id={data.id}
              />
            ))
          }
      </Box>
    </>
  );
}
