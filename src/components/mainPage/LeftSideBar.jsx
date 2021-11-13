import React, { useContext, useEffect } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./mainPage.css";
import HomeIcon from "@mui/icons-material/Home";
import Grid3x3Icon from "@mui/icons-material/Grid3x3";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { authContext } from "../../contexts/AuthContext";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../contexts/UserContext";

const LeftSideBar = () => {
  const { logOut, user } = useContext(authContext);
  const { getAUser, username } = useContext(userContext);
  let navigate = useNavigate();
  function handleLogOut() {
    logOut();
    localStorage.clear();
    navigate("/auth");
  }

  let uid = localStorage.getItem("uid");
  let usrname = localStorage.getItem("username");

  useEffect(() => (uid ? getAUser(uid) : null), []);

  let logout;
  if (user) {
    if (!uid) {
      localStorage.setItem("uid", user.uid);
      console.log(uid);
    }
    logout = (
      <Button variant="contained" onClick={() => handleLogOut()}>
        Log Out
      </Button>
    );
  } else {
    logout = (
      <Button variant="contained" onClick={() => handleLogOut()}>
        Sign up
      </Button>
    );
  }

  let hz;
  if (username) {
    if (!usrname) {
      localStorage.setItem("username", username[0].username);
    }
    hz = <br style={{ display: "none" }}></br>;
  } else {
    hz = <div style={{ display: "none" }}></div>;
  }

  function userLogedIn() {
    uid = localStorage.getItem("uid");
    if (!uid) {
      navigate("/auth");
    }
  }

  setTimeout(userLogedIn, 1500);

  return (
    <div className="leftBar">
      <div className="leftSideBar">
        <div>
          <TwitterIcon style={{ color: "white" }} />
        </div>
        <div className="left-text">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="l-t">
              <HomeIcon />
              <h5>Home</h5>
            </div>
          </Link>
          <Link to="/explore" style={{ textDecoration: "none" }}>
            <div className="l-t">
              <Grid3x3Icon />
              <h5>Explore</h5>
            </div>
          </Link>
          <Link to="/messages" style={{ textDecoration: "none" }}>
            <div className="l-t">
              <MailOutlineIcon />
              <h5>Messages</h5>
            </div>
          </Link>
          <Link to="profile" style={{ textDecoration: "none" }}>
            <div className="l-t">
              <PersonOutlineIcon />
              <h5>Profile</h5>
            </div>
          </Link>
          <Link to="products" style={{ textDecoration: "none" }}>
            <div className="l-t">
              <ProductionQuantityLimitsIcon />
              <h5>Products</h5>
            </div>
          </Link>
        </div>
        <div className="btn-button">
          <Button variant="contained">Tweet</Button>
        </div>
      </div>
      {logout}
      {hz}
    </div>
  );
};

export default LeftSideBar;
