import React, { useState, useContext } from "react";
import { Button } from "@mui/material";
import atai from "../../images/atai.jpg";
import { userContext } from "../../contexts/UserContext";
import "./mainPage.css";

const FollowLine = ({ user }) => {
  let [flw, setFlw] = useState(false);
  let { removeFromUsersFollowing, AddToUserFollowings } =
    useContext(userContext);

  function handleFollowAndUnfollow(action) {
    let following = localStorage.getItem("following");
    let userID = localStorage.getItem("userID");
    following = JSON.parse(following);
    if (action === true) {
      following = following.filter((item) => item !== user.username);
      localStorage.setItem("following", JSON.stringify(following));
      setFlw(false);
      removeFromUsersFollowing(userID, following);
    } else {
      following.push(user.username);
      localStorage.setItem("following", JSON.stringify(following));
      setFlw(true);
      AddToUserFollowings(userID, following);
    }
  }

  let img;
  if (user.imageURL) {
    img = user.imageURL;
  } else {
    img = atai;
  }

  return (
    <div className="FollowLineCard">
      <div>
        <img src={img} className="followUserImage" alt="..."></img>
        <h6>@{user.username}</h6>
      </div>
      <Button
        onClick={() => handleFollowAndUnfollow(flw)}
        sx={{ marginTop: "-11px" }}
      >
        {flw ? "unfollow" : "follow"}
      </Button>
    </div>
  );
};

export default FollowLine;
