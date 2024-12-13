import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import NavBar from "./widget/NavBar";
import HistoryPage from "./page/HistoryPage";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import SendPage from "./page/SendPage";
import Header from "./widget/Header";
import PrivateRoute from "./component/PrivateRoute";

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div className="grid grid-areas-layout grid-cols-layout grid-rows-layout gap-x-4 relative max-w-[390px] w-full bg-white shadow-md selection:bg-green-900 font-[pretendard]">
        {location.pathname !== "/login" && <Header />}
        <main className={`grid-in-main ${location.pathname !== "/login" ? "my-3 px-[24px]" : ""}`}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />

            <Route element={<PrivateRoute />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/send" element={<SendPage />} />
              <Route path="/history" element={<HistoryPage />} />
            </Route>
          </Routes>
        </main>
        {location.pathname !== "/login" && <NavBar />}
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
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);
