import React from "react";
import AuthContextProvider from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";

const TweeterRoutes = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/auth" element={<AuthPage />} />
          <Route exact path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default TweeterRoutes;

//<Route path="*" element={<NoMatch />} />
