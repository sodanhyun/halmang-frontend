import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import HistoryPage from "./page/HistoryPage";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import SendPage from "./page/SendPage";

const AppContent = () => {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="history" element={<HistoryPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="send" element={<SendPage />} />
      </Routes>
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
