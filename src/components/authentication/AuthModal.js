import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AppBar } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
//   boxShadow: 24,
  p: 2,
  color: "white",
};

const AuthModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //   const [value, setValue] = React.useState(0);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const buttonStyles = {
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem",
    width: 85,
    height: 40,
    backgroundColor: "#EEBC1D",
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} style={buttonStyles}>
        Login
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <AppBar
            position="static"
            style={{ backgroundColor: "transparent", color: "white" }}
          >
            <Tabs
              // The value variable will be 0 if we press login and 1 for signup.
              value={value}
              variant="fullWidth"
              onChange={handleChange}
              style={{ borderRadius: 10 }}
            >
              <Tab label="Login" />
              <Tab label="SignUp" />
            </Tabs>

            {/* Switching tabs for login and signup */}
            {value === 0 && <Login handleClose={handleClose}/>}
            {value === 1 && <Signup handleClose={handleClose}/>}

          </AppBar>
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
