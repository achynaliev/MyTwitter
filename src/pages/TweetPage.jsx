import React from 'react';
import LeftSideBar from '../components/mainPage/LeftSideBar';
import RightSideBar from '../components/mainPage/RightSideBar';
import ReplayIcon from "@mui/icons-material/Replay";


const TweetPage = () => {
    return (
        <div>
            <div className="tweetPageStructure">
                <LeftSideBar />
                <div className="tweetNavbar">
                    <ReplayIcon sx={{ fontSize: 20 }} style={{ color: "white", borderBottom: "0.05px solid rgb(117, 117, 117);" }} />
                </div>

                <div className="tweetContainer">
                    <h2>Hello</h2>
                    <img width="140" src="https://pp.userapi.com/c621700/v621700993/355c6/VNtu_8CMOhA.jpg" alt="" />
                </div>
                <RightSideBar />
            </div>

        </div>
    );
};

export default TweetPage;