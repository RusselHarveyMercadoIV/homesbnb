import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./pages/App";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import { UserProvider } from "./context/user";
import BookRequest from "./pages/BookRequest";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/book/:id" element={<BookRequest />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </UserProvider>
);
