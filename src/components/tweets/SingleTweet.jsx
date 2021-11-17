import React, { useEffect, useState, useContext } from "react";
import "./tweets.css";
import atai from "../../images/atai.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import ReplayIcon from "@mui/icons-material/Replay";
import { likesContext } from "../../contexts/LikesContext";

function timeSince(date) {
  let seconds = Math.floor((new Date() - date) / 1000);

  let interval = seconds / 31536000;
  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

const SingleTweet = ({ tweet, likesForAUser }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isLiked, setLiked] = useState(false);
  const [likeId, setLikeId] = useState(null);

  const { LikeAtweet, deleteAlikeOnATweet } = useContext(likesContext);
  let username = localStorage.getItem("username");

  useEffect(() => {
    for (let i = 0; i < likesForAUser.length; i++) {
      if (likesForAUser[i].tweetId === tweet.id) {
        setLiked(true);
        setLikeId(likesForAUser[i].id);
      }
    }
  }, []);

  function handleLike() {
    if (isLiked) {
      deleteAlikeOnATweet(likeId, username);
      setLiked(false);
    } else {
      LikeAtweet(tweet.id, username);
      setLiked(true);
    }
  }

  useEffect(() => {
    setTimeLeft(timeSince(tweet.CreatedAtMs));
  }, []);

  return (
    <div className="tweetContainer">
      <img
        src={tweet.ownerImgURl ? tweet.ownerImgURl : atai}
        className="userLogoOnTweet"
        alt="..."
      ></img>
      <div className="createTweetInputContainer">
        <h6 className="tweetUsername">
          @{tweet.ownerUsername} {timeLeft} ago
        </h6>
        <h5 className="tweetText">{tweet.tweet}</h5>
        <div className="tweetFooter">
          <ChatBubbleOutlineIcon
            sx={{ fontSize: 18 }}
            style={{ color: "gray" }}
          />
          <ReplayIcon sx={{ fontSize: 20 }} style={{ color: "gray" }} />
          <FavoriteBorderIcon
            onClick={handleLike}
            sx={{ fontSize: 20 }}
            style={isLiked ? { color: "red" } : { color: "gray" }}
          />
          <ShareIcon sx={{ fontSize: 18 }} style={{ color: "gray" }} />
        </div>
      </div>
    </div>
  );
};

export default SingleTweet;
