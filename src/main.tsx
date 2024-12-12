import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./widget/NavBar";
import HistoryPage from "./page/HistoryPage";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import SendPage from "./page/SendPage";

const AppContent = () => {
  return (
    <div className="relative text-center selection:bg-green-900 font-[pretendard]">
      <header className="flex min-h-screen flex-col items-center justify-center bg-[#282c34] text-white">
        <h1 className="text-5xl font-black">Main Content Area</h1>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/send" element={<SendPage />} />
      </Routes>
      <NavBar />
    </div>
  );
};

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  </React.StrictMode>,
  root
);