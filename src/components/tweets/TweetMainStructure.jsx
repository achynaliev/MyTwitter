import React, { useContext, useEffect, useState } from "react";
import RightSideBar from "../mainPage/RightSideBar";
import ReplayIcon from "@mui/icons-material/Replay";
import SingleTweet from "../tweets/SingleTweet";
import { useParams } from "react-router";
import LeftSideBar from "../mainPage/LeftSideBar";
import { likesContext } from "../../contexts/LikesContext";
import { tweetContext } from "../../contexts/TweetContext";
import { Button } from "@mui/material";
import CommentList from "../comment/CommentList";
import { commentContext } from "../../contexts/CommentContext";

const TweetMainStructure = (props) => {
    const params = useParams();
    const { getASpecificTweet, specific_tweet } = useContext(tweetContext);
    const { getLikesForAUser, likesForAUser } = useContext(likesContext);
    const { createAComment, userImgURL } = useContext(commentContext);
    useEffect(() => {
        getASpecificTweet(params.tweetId);
    }, []);
    useEffect(() => {
        getLikesForAUser(params.username);
    }, []);

    let [comment, setComment] = useState("");
    let profileIMG = localStorage.getItem("profileIMG");

    function handleCreateComment() {
        let time = new Date();
        let timeMls = Date.now();
        let userID = localStorage.getItem("userID");
        profileIMG = localStorage.getItem("profileIMG");
        let username = localStorage.getItem("username");
        // console.log(comment);
        createAComment(
            username,
            params.tweetId,
            profileIMG,
            comment,
            userID,
            time,
            timeMls
        );
    }

    return (
        <div>
            <div className="tweetPageStructure">
                <LeftSideBar />
                <div className="mainFeedContainerr">
                    <div className="tweetNavbar">
                        <ReplayIcon sx={{ fontSize: 20 }} style={{ color: "white" }} />
                        <h2>Tweeter</h2>
                    </div>
                    {specific_tweet && likesForAUser ? (
                        <SingleTweet tweet={specific_tweet} likesForAUser={likesForAUser} />
                    ) : (
                        <div></div>
                    )}


                    <div className="btn-reply">
                        <img src={profileIMG} className="followUserImage" alt="" />
                        <input
                            type="text"
                            className="createTweetInput"
                            name="tweet"
                            placeholder="Text"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <div>
                            <div className="btn-replyy">
                                <Button
                                    onClick={handleCreateComment}
                                    variant="contained"
                                    size="medium"
                                >
                                    Reply
                                </Button>
                            </div>
                        </div>
                    </div>
                    <CommentList />
                </div>
                <RightSideBar />
            </div>
        </div>
    );
};

export default TweetMainStructure;
