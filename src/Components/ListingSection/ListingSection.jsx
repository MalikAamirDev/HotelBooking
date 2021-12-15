import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { collection, getDocs, db } from "../Config/Firebase";
import ProductCard from "../Components/Product/ProductCards";

const ListingSection = () => {
    const [products, setProducts] = useState([]);

    // collection ref
    const colRef = collection(db, "Products");
  
    //  get collection data
  
    const getProducts = () => {
      getDocs(colRef)
        .then((snapshot) => {
          let tempProducts = [];
  
          tempProducts = snapshot.docs.map((pData) => ({
            id: pData.id,
            product: pData.data(),
          }));
          setProducts(tempProducts);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    useEffect(() => {
      getProducts();
    }, []);
    console.log(products);
  return (
    <>
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
            products.map((data,i)=>(
              <ProductCard
                title={data.product.name}
                price={data.product.price}
                ratting={data.product.rating}
                image={data.product.image}
                description={data.product.image}
                id={data.id}
              />
            ))
          }
      </Box>
    </>
  );
};

export default ListingSection;
