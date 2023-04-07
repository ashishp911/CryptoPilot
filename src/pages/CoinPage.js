import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import axios from "axios";
import { SingleCoin } from "../config/api";
import {
  ThemeProvider,
  Typography,
  LinearProgress,
  useMediaQuery,
  createTheme,
} from "@mui/material";
import CoinInfo from "../components/CoinInfo";
import HTMLReactParser from "html-react-parser";
import { numberWithCommas } from "../components/banner/Carousel";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };

  console.log("YOU ARE HRERE");
  console.log(coin);

  useEffect(() => {
    fetchCoin();
  }, []);

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });
  const issmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isxsScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  const containerStyles = {
    display: "flex",
    ...(isMdScreen && {
      flexDirection: 'column', 
      alignItems: 'center',
    }),
  };

  const sidebarStyles = {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    ...(isMdScreen && {
      width:'100%',
    }),
    alignItems: "center",
    marginTop: 25,
    borderRight: "2px solid grey",
  };

  const headingStyle = {
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "Montserrat",
  };

  const descriptionStyle = {
    width: "100%",
    fontFamily: "Montserrat",
    padding: 25,
    paddingBottom: 15,
    paddingTop: 0,
    textAlign: "justify",
  };

  const marketData = {
    alignSelf: "start",
    padding: 25,
    paddingTop: 10,
    width: "100%",
    ...(isMdScreen && {
      display:"flex", 
      justifyContent:"space-around",
    }),
    ...(issmScreen && {
      flexDirection: "column",
      alignItems:"center"
    }),
    ...(isxsScreen && {
      alignItems:"start"
    }),

  };

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <ThemeProvider theme={theme}>
      <div style={containerStyles}>
        <div style={sidebarStyles}>
          <img
            src={coin?.image.large}
            alt={coin?.name}
            height="200"
            style={{ marginBottom: 20 }}
          />
          <Typography variant="h3" style={headingStyle}>
            {coin?.name}
          </Typography>

          <Typography variant="subtitles" style={descriptionStyle}>
            {HTMLReactParser(coin?.description.en.split(". ")[0])}
          </Typography>
          <div style={marketData}>
            <span style={{ display: "flex" }}>
              <Typography variant="h5" style={headingStyle}>
                Rank :
              </Typography>
              <Typography
                variant="h5"
                style={{ marginLeft: 10, fontFamily: "Montserrat" }}
              >
                {" "}
                {coin?.market_cap_rank}
              </Typography>
            </span>
            <span style={{ display: "flex" }}>
              <Typography variant="h5" style={headingStyle}>
                Current Price :
              </Typography>
              <Typography
                variant="h5"
                style={{ marginLeft: 10, fontFamily: "Montserrat" }}
              >
                {symbol}{" "}
                {numberWithCommas(
                  coin?.market_data.current_price[currency.toLowerCase()]
                )}
              </Typography>
            </span>
            <span style={{ display: "flex" }}>
              <Typography variant="h5" style={headingStyle}>
                Market Cap :{" "}
              </Typography>
              <Typography
                variant="h5"
                style={{ marginLeft: 10, fontFamily: "Montserrat" }}
              >
                {symbol}{" "}
                {numberWithCommas(
                  coin?.market_data.market_cap[currency.toLowerCase()]
                    .toString()
                    .slice(0, -6)
                )}{" "}
                M
              </Typography>
            </span>
          </div>
        </div>
        {/* Chart */}
        <CoinInfo />
      </div>
    </ThemeProvider>
  );
};

export default CoinPage;
