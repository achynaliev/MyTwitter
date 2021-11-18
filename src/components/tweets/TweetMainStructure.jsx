import React, { useContext, useEffect } from 'react';
import RightSideBar from '../mainPage/RightSideBar';
import ReplayIcon from "@mui/icons-material/Replay";
import SingleTweet from "../tweets/SingleTweet"
import { useParams } from 'react-router';
import LeftSideBar from '../mainPage/LeftSideBar';
import { likesContext } from '../../contexts/LikesContext';
import { tweetContext } from '../../contexts/TweetContext';
import { Button } from "@mui/material";



const TweetMainStructure = () => {
    const params = useParams()
    const { getASpecificTweet, specific_tweet } = useContext(tweetContext)
    const { getLikesForAUser, likesForAUser } = useContext(likesContext)
    useEffect(() => {
        getASpecificTweet(params.tweetId)

    }, [])
    useEffect(() => {
        getLikesForAUser(params.username)
    }, [])

    return (
        <div>
            <div className="tweetPageStructure">
                <LeftSideBar />
                <div className="mainFeedContainerr">
                    <div className="tweetNavbar">
                        <ReplayIcon sx={{ fontSize: 20 }} style={{ color: "white" }} />
                        <h2>Tweeter</h2>
                    </div>
                    {specific_tweet && likesForAUser ? (<SingleTweet tweet={specific_tweet} likesForAUser={likesForAUser} />) : (<div></div>)}


                    <div className="btn-reply">
                        <input
                            type="text"
                            className="createTweetInput"
                            name="tweet"
                            placeholder="Text" />
                        <div>

                            <div className="btn-replyy">
                                <Button
                                    variant="contained"
                                    size="medium"
                                >Reply</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <RightSideBar />
            </div>

        </div>
    );
};

export default TweetMainStructure;