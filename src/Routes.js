import React from "react";
import AuthContextProvider from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

const TweeterRoutes = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default TweeterRoutes;

//<Route path="*" element={<NoMatch />} />
