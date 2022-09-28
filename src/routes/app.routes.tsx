import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "../Pages/Login/LoginPage";
import Cadastro from "../Pages/Cadastro/SignupPage";
import Home from "../Pages/Home/HomePage"

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Cadastro />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
