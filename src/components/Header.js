import React from "react";
import { styled } from "@mui/system";
import {
  AppBar,
  Container,
  Typography,
  Toolbar,
  Select,
  MenuItem,
  createTheme,
  ThemeProvider
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark",
    },
  });

  const TextHeading = styled(Typography)({
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontSize: "2rem",
    fontWeight: "bold",
    cursor: "pointer",
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <TextHeading
              onClick={() => {
                navigate("/");
              }}
              variant="h6"
            >
              CryptoPilot
            </TextHeading>
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
              }}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
