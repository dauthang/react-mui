import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useComponentDidMount } from "../utility/lifecycle";
import { connect } from "react-redux";
const PrimaryAppBar = (props) => {
  const [openAccount, setOpenAccount] = React.useState(false);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setOpenAccount(true);
  };
  const handleClose = () => {
    // setAnchorEl(null);
  };

  useComponentDidMount(() => {
    console.log("Component did mount!");
  });

  const logout = () => {
    localStorage.removeItem("auth");
    window.location.reload();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <h1>Home</h1>
          </Typography>
          {props.user && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleMenu}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={openAccount}
                onClose={handleClose}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const mapStateToProps = (state) => {
  console.log("bar", state);
  return {
    user: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (useState) => {
      dispatch();
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrimaryAppBar);
