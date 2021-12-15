import { Box } from "@mui/system";
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography'
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Button } from "@mui/material";

const ProductContainer = () => {
  return (
    <>
      <Box sx={{ minHeight: "60vh", mx: 2, mt: -23 }}>
        <Grid container spacing={2}>
          <Grid
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
              lg: 'row',
              alignItems: 'center',
              justifyContent: 'center',
           }

          }}
           item sm={6} md={6}>
            <Box
              sx={{
                width: { xs: '80%',sm: "100%", md: '40%' },
                // height: { xs: "100%", md: "40%" },
                // objectFit: "contain",
              }}
              component="img"
              src="images/products/f1.png"
            />
            <Box
            sx={{ paddingLeft: "10px", mt: { xs: 2, xl: 20 } }}
            >
              <Typography variant="h6" sx={{fontWeight: 'bold'}}>
                Winter Suits 2021
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quam?
              </Typography>
              <Typography variant="h6" sx={{fontWeight: 'bold'}}>
                $520
              </Typography>
              <Button
              variant="Text"
              // color="primary"
              sx={{ background: 'white',color: 'red', border: '1px solid red' }}
              startIcon={<ShoppingBasketIcon/>}
              
            >
              Add to Cart
            </Button>
            </Box>
          </Grid>
          <Grid
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
              lg: 'row',
              alignItems: 'center',
              justifyContent: 'center',
           }

          }}
           item sm={6} md={6}>
            <Box
              sx={{
                width: { xs: '80%',sm: "100%", md: '40%' },
                // height: { xs: "100%", md: "40%" },
                // objectFit: "contain",
              }}
              component="img"
              src="images/products/f1.png"
            />
            <Box
            sx={{ paddingLeft: "10px", mt: { xs: 2, xl: 20 } }}
            >
              <Typography variant="h6" sx={{fontWeight: 'bold'}}>
                Winter Suits 2021
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quam?
              </Typography>
              <Typography variant="h6" sx={{fontWeight: 'bold'}}>
                $520
              </Typography>
              <Button
              variant="Text"
              // color="primary"
              sx={{ background: 'white',color: 'red', border: '1px solid red' }}
              startIcon={<ShoppingBasketIcon/>}
              
            >
              Add to Cart
            </Button>
            </Box>
          </Grid>
        </Grid>
        
        {/* Feature Product  */}

        {/* Product List */}
      </Box>
    </>
  );
};

export default ProductContainer;
