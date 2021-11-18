import React, { useEffect, useState, useContext } from "react";
import atai from "../../images/atai.jpg";
import "./tweets.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import ReplayIcon from "@mui/icons-material/Replay";
import { likesContext } from "../../contexts/LikesContext";
import { tweetContext } from "../../contexts/TweetContext";
import { Link } from "react-router-dom";
import TweetPage from "../../pages/TweetPage";
import { Button } from "@mui/material";

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
  const [numLikes, setNumLikes] = useState(tweet.numberOfLikes);

  const { LikeAtweet, deleteAlikeOnATweet } = useContext(likesContext);
  let username = localStorage.getItem("username");

  useEffect(() => {
    for (let i = 0; i < likesForAUser.length; i++) {
      if (likesForAUser[i].tweetId === tweet.id) {
        setLiked(true);
        setLikeId(likesForAUser[i].id);
      }
    }
  }, [likesForAUser]);
  const { updateNumberOfLikes } = useContext(tweetContext);

  function handleLike() {
    if (isLiked) {
      deleteAlikeOnATweet(likeId, username);
      setLiked(false);
      updateNumberOfLikes(tweet.id, tweet.numberOfLikes - 1);
      setNumLikes(numLikes - 1);
    } else {
      LikeAtweet(tweet.id, username);
      setLiked(true);
      updateNumberOfLikes(tweet.id, tweet.numberOfLikes + 1);
      setNumLikes(numLikes + 1);
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
        <div className="singleTweetHeader">
          <h6 className="tweetUsername">
            @{tweet.ownerUsername} {timeLeft} ago
          </h6>
          <Button sx={{ marginTop: "-11px" }}>follow</Button>
        </div>
        <Link
          style={{ textDecoration: "none" }}
          to={"/" + tweet.ownerUsername + "/" + tweet.id}
        >
          <h5 className="tweetText">{tweet.tweet}</h5>
        </Link>
        <div className="tweetFooter">
          <Link to={"/" + tweet.ownerUsername + "/" + tweet.id}>
            <ChatBubbleOutlineIcon
              sx={{ fontSize: 18 }}
              style={{ color: "gray" }}
            />
          </Link>
          <ReplayIcon sx={{ fontSize: 20 }} style={{ color: "gray" }} />
          <div>
            <FavoriteBorderIcon
              onClick={handleLike}
              sx={{ fontSize: 20 }}
              style={
                isLiked
                  ? { color: "red", marginRight: "3px" }
                  : { color: "gray", marginRight: "3px" }
              }
            />
            <div className="likesNum">{numLikes != 0 ? numLikes : ""}</div>
          </div>

          <ShareIcon sx={{ fontSize: 18 }} style={{ color: "gray" }} />
        </div>
      </div>
    </div>
  );
};

export default SingleTweet;
