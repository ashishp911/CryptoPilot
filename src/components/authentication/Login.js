import { TextField, Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Box } from "@mui/system";

const Login = ({ handleClose }) => {
  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {};
  return (
    <Box
      p={3}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <TextField
        label="Enter your email"
        name="email"
        value={email}
        variant="outlined"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        fullWidth
      />

      <TextField
        label="Enter your password"
        name="password"
        value={password}
        variant="outlined"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        fullWidth
      />
      <Button
      variant="contained"
      size="large"
      style={{
        backgroundColor: "#EEBC1D"
      }}
      onClick={handleSubmit}
      >
        Login 
      </Button>
    </Box>
  );
};

export default Login;
