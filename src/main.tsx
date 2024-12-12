import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./widget/NavBar";
import HistoryPage from "./page/HistoryPage";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import SendPage from "./page/SendPage";
import Header from "./widget/Header";

const AppContent = () => {
  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div className="grid grid-areas-layout grid-cols-layout grid-rows-layout gap-4 relative max-w-[390px] w-full bg-white shadow-md selection:bg-green-900 font-[pretendard]">
        <Header />
        <main className="grid-in-main px-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/send" element={<SendPage />} />
          </Routes>
        </main>
        <NavBar />
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find the root element");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  </React.StrictMode>
);
