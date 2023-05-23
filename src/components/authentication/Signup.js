import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { CryptoState } from "../../CryptoContext";

const Signup = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {setAlert} = CryptoState()
  
  const handleSubmit = () => {
    console.log("Coming to handle submit");
    // 1st check --> if password != confirm password
    if (password !== confirmPassword) {
      // using snackbar from material UI as an alert
      setAlert({
        open:true,
        message:"passwords do not match",
        type:"error"
      })
    }
    return 
  };

  return (
    <Box
      p={3}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <TextField
        variant="outlined"
        type="email"
        label="Enter email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        fullWidth
      />

      <TextField
        variant="outlined"
        type="password"
        label="Enter password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        fullWidth
      />

      <TextField
        variant="outlined"
        type="password"
        label="Confirm Password"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
        fullWidth
      />

      {/* Signup button */}
      <Button
        variant="contained"
        size="large"
        style={{ backgroundColor: "#EEBC1D" }}
        onClick={handleSubmit}
      >
        Signup
      </Button>
    </Box>
  );
};

export default Signup;
