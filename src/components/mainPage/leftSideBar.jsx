import React, { useContext } from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./mainPage.css"
import HomeIcon from '@mui/icons-material/Home';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { authContext } from '../../contexts/AuthContext'
import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
const LeftSideBar = () => {
    const { logOut } = useContext(authContext)
    let navigate = useNavigate()
    function handleLogOut() {
        logOut();
        localStorage.clear();
        navigate("/auth")

    }

    return (
        <div className="leftBar">
            <div className="leftSideBar">
                <div>
                    <TwitterIcon style={{ color: "white" }} />
                </div>
                <div className="left-text">
                    <Link to="/home" style={{ textDecoration: "none" }} >
                        <div className="l-t">
                            <HomeIcon />
                            <h5>Home</h5>
                        </div>
                    </Link>
                    <Link to="/explore" style={{ textDecoration: "none" }} >
                        <div className="l-t">
                            <Grid3x3Icon />
                            <h5>Explore</h5>
                        </div>
                    </Link>
                    <Link to="/messages" style={{ textDecoration: "none" }} >
                        <div className="l-t">
                            <MailOutlineIcon />
                            <h5>Messages</h5>
                        </div>
                    </Link>
                    <Link to="profile" style={{ textDecoration: "none" }} >
                        <div className="l-t">
                            <PersonOutlineIcon />
                            <h5>Profile</h5>
                        </div>
                    </Link>
                </div>

                <Button variant="contained">Twitter</Button>
            </div >

            <Button
                variant="contained"
                onClick={() => handleLogOut()}
            >Log Out</Button>
        </div>
    );
}


export default LeftSideBar;


