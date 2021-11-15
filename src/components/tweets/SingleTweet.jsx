import React, { useEffect, useState } from "react";
import "./tweets.css";
import atai from "../../images/atai.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import ReplayIcon from "@mui/icons-material/Replay";

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

const SingleTweet = ({ tweet }) => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    setTimeLeft(timeSince(tweet.CreatedAtMs));
  }, []);

  return (
    <div className="tweetContainer">
      <img src={atai} className="userLogoOnTweet" alt="..."></img>
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
          <FavoriteBorderIcon sx={{ fontSize: 20 }} style={{ color: "gray" }} />
          <ShareIcon sx={{ fontSize: 18 }} style={{ color: "gray" }} />
        </div>
      </div>
    </div>
  );
};

export default SingleTweet;
