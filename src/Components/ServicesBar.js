import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Service1 from "../image/f-1.svg";
import Service2 from "../image/f-2.svg";
import Service3 from "../image/f-3.svg";
import Service4 from "../image/f-4.svg";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  // padding: theme.spacing(5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  // width: 200,
  background: "#ffffff",
  borderRadius: 10,
  minWidth: 210,
  maxWidth: 280,
  minHeight: 134,
  maxheight: 135,
  margin: 8,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

export default function ServicesBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          marginTop: -10,
          zIndex: 1000,
        }}
      >
        <Stack
          direction="row"
          bgcolor={"#f2ffff"}
          justifyContent={"center"}
          borderRadius={2}
          flexWrap={"wrap"}
          paddingX={1}
          paddingY={1}
        >
          <Item>
            <img src={Service1} alt="service1" width="45" height="45" />
            <Typography variant="body1" fontWeight={"600"} color="initial">
              Airport transfer
            </Typography>
          </Item>
          <Item>
            <img src={Service2} alt="service1" width="45" height="45" />
            <Typography variant="body1" fontWeight={"600"} color="initial">
              All inclusive
            </Typography>
          </Item>
          <Item>
            <img src={Service3} alt="service1" width="45" height="45" />
            <Typography variant="body1" fontWeight={"600"} color="initial">
              Air-conditioned
            </Typography>
          </Item>
          <Item>
            <img src={Service4} alt="service1" width="45" height="45" />
            <Typography variant="body1" fontWeight={"600"} color="initial">
              Under protection
            </Typography>
          </Item>
        </Stack>
      </Box>
    </div>
  );
}
