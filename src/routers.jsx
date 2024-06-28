import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthGuard from './authGuard.jsx';
import Login from "./Pages/Login/index";
import Home from "./Pages/Terminal/index";

export default function Routers() {
  return (
    <BrowserRouter>
      <AuthGuard />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Terminal" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
