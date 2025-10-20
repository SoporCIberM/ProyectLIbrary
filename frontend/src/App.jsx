import React from "react";
import "./App.css";
import ResponsiveAppBar from "./components/navigation";
import { Route, Routes } from "react-router-dom";
import { LoginRegister } from "./components/LoginRegister";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ResponsiveAppBar />} />
      <Route path="/LoginRegister" element={<LoginRegister />} />
    </Routes>
  );
}

export default App;
