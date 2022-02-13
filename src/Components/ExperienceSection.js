import { Box } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import ServicesBar from "./ServicesBar";
import about1 from "../image/about-t1.jpg";
import about2 from "../image/about-t2.jpg";
import { Button } from "@mui/material";

function ExperienceSection() {
  return (
    <div>
      <Box
        sx={{
          height: "100%",
          background: "var(--azure)",
        }}
      >
        <ServicesBar />
        <Box
          display={"flex"}
          justifyContent="center"
          marginTop={12.5}
          paddingBottom={12.5}
        >
          <Box
            sx={{
              background: "white",
              width: "80%",
              minHeight: "430px",
              maxheight: "1290px",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              borderRadius: 5,
              p: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "column", lg: "row" },
              }}
            >
              <Box
                component="img"
                src={about1}
                sx={{
                  objectFit: "cover",
                  width: { xs: "100%", md: "100%", lg: "50%" },
                  borderRadius: {
                    xs: "10px 10px 0 0",
                    md: "10px 10px 0 0",
                    lg: "10px 0 0 0",
                  },
                }}
              />
              <Box
                sx={{
                  textAlign: "start",
                  p: { xs: 1, md: 3, lg: 7.5 },
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h4" fontWeight={600} color="initial">
                  We have 17+ years of Experience
                </Typography>
                <Typography variant="body1" sx={{ my: 4 }} color="initial">
                  Consectetur adipisicing elit. Nihil, illum voluptate eveniet
                  ex fugit ea delectus, sed voluptatem. Laborum accusantium
                  libero commodi id officiis itaque esse adipisci,
                  necessitatibus asperiores, illo odio.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    width: "200px",
                    px: 5,
                    py: 1.5,
                    textTransform: "none",
                    borderRadius: 10,
                    letterSpacing: "2px",
                    ":hover ": {
                      backgroundColor: "var(--hover)",
                    },
                    mb: { md: 5, xs: 5 },
                  }}
                >
                  More about us
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "column", lg: "row" },
              }}
            >
              <Box
                sx={{
                  textAlign: "start",
                  p: { xs: 1, md: 3, lg: 7.5 },
                  display: "flex",
                  flexDirection: "column",
                  order: { lg: 1, md: 2, xs: 2 },
                }}
              >
                <Typography variant="h4" fontWeight={600} color="initial">
                  Start your Amazing Adventure!
                </Typography>
                <Typography variant="body1" sx={{ my: 4 }} color="initial">
                  Consectetur adipisicing elit. Nihil, illum voluptate eveniet
                  ex fugit ea delectus, sed voluptatem. Laborum accusantium
                  libero commodi id officiis itaque esse adipisci,
                  necessitatibus asperiores, illo odio.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    width: "200px",
                    px: 5,
                    py: 1.5,
                    borderRadius: 10,
                    textTransform: "none",
                    letterSpacing: "2px",
                    ":hover ": {
                      backgroundColor: "var(--hover)",
                    },
                  }}
                >
                  Choose a room
                </Button>
              </Box>
              <Box
                component="img"
                src={about2}
                sx={{
                  width: { xs: "100%", md: "100%", lg: "50%" },
                  order: { xs: 1, md: 1 },
                  borderRadius: {
                    xs: "10px 10px 0 0",
                    md: "10px 10px 0 0",
                    lg: "0 0 10px 0",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default ExperienceSection;
