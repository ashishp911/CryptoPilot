import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { CryptoState } from "../../CryptoContext";
import { Avatar, Button } from "@mui/material";

export default function UserSidebar() {
  const [state, setState] = React.useState({ right: false });

  const containerStyle = {
    width: 350,
    padding: 25,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    fontFamily: "monospace",
  };
  const profileStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    height: "92%",
  };

  const pictureStyle = {
    width: 200,
    height: 200,
    cursor: "pointer",
    objectFit: "contain",
    backgroundColor: "#EEBC1D",
  };

  const logoutStyles = {
    height: "8%", 
    width: "100%", 
    marginTop: 20,
    cursor: "pointer",
    backgroundColor: "#EEBC1D",
}

const watchlistStyles = {
    flex: 1,
    width: "100%", 
    backgroundColor: "grey",
    borderRadius: 10, 
    padding: 15,
    paddingTop: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 12, 
    overflowY: "scroll",
  }

  //   getting the user from the context
  const { user } = CryptoState();

  const logOut = () => {

  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Avatar
            onClick={toggleDrawer(anchor, true)}
            style={{
              height: 38,
              width: 38,
              cursor: "pointer",
              backgroundColor: "#EEBC1D",
            }}
            src={user.photoURL}
            alt={user.displaName || user.email}
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div style={containerStyle}>
              <div style={profileStyle}>
                <Avatar
                  style={pictureStyle}
                  src={user.photoURL}
                  alt={user.displaName || user.email}
                />
                <span
                  style={{
                    width: "100%",
                    fontSize: 25,
                    textAlign: "center",
                    fontWeight: "bolder",
                    wordWrap: "break-word",
                  }}
                >
                  {user.displaName || user.email}
                </span>
                <div
                style={watchlistStyles}>
                    <span style={{fontSize: 15, textShadow: "0 0 5px black"}}>
                        Watchlist
                    </span>
                </div>
              </div>
              {/* button for log out */}
              <Button 
              variant="contained"
              style={logoutStyles}
              onClick={logOut}
              >
                Logout
              </Button>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
