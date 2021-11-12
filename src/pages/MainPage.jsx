import React, { useContext } from "react";
import { authContext } from "../contexts/AuthContext";
import TweeterRoutes from "../Routes";
import MainPageStructure from "../components/mainPage/MainPageStructure";
import AuthPage from "./AuthPage";

const MainPage = () => {
  const { user } = useContext(authContext);

  let mainPage;
  if (user) {
    mainPage = <MainPageStructure />;
  } else {
    mainPage = <AuthPage />;
  }

  return <>{mainPage} </>;
};

export default MainPage;
