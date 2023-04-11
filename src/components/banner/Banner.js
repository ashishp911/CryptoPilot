import React from "react";
import { styled } from "@mui/system";
import { Container, Typography } from "@mui/material";
import backgroundImage from "../../Images/banner2.jpg";
import Carousel from "./Carousel";
const Banner = () => {
  //   const bannerStyles = styled("div")({
  //     backgroundImage: `url(.././src/Images/banner2.jpg)`,
  //   });
  const bgImage = {
    backgroundImage: `url(${backgroundImage})`,
  };
  const bannerContent = {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  };
  const tagline = {
    height:'40%',
    display:'flex',
    flexDirection:"column",
    justifyContent:'center',
    alignItems:'center',

  };

  return (
    <div style={bgImage}>
      <Container style={bannerContent}>
        <div style={tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            CryptoPilot
          </Typography>
          <Typography
            variant="subtitle1"
            style={{
                color: "darkgrey",
                textTransform:"capitalize",
                fontFamily: "Montserrat",
            }}
          >
            Get all the info regarding your favourite Cryptocurrency
          </Typography>
        </div>
        <Carousel/>
      </Container>
    </div>
  );
};

export default Banner;
