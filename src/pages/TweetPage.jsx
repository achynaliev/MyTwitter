import React from 'react';
import LeftSideBar from '../components/mainPage/LeftSideBar';
import RightSideBar from '../components/mainPage/RightSideBar';
import SingleTweet from '../components/tweets/SingleTweet';


const TweetPage = () => {
    return (
        <div className="tweetPageStructure">
            <LeftSideBar />
            {/* <SingleTweet /> */}
            <RightSideBar />
        </div>
    );
};

export default TweetPage;