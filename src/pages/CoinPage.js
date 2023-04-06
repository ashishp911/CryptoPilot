import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import axios from "axios";
import { SingleCoin } from "../config/api";
import { ThemeProvider, Typography } from "@mui/material";
import CoinInfo from "../components/CoinInfo";
import HTMLReactParser from 'html-react-parser';
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

  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
  };

  const sidebarStyles = {
    width: "30%",
    display: "flex",
    flexDirection: "column",
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
    padding:25, 
    paddingBottom: 15,
    paddingTop:0,
    textAlign:"justify",
  }

  return (
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
      </div>
      {/* Chart */}
      <CoinInfo />
    </div>
  );
};

export default CoinPage;
