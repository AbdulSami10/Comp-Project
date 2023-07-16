import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Header from "./menu/Header";
import About from "./pages/About";
import Footer from "./menu/Footer";
import Registration from "./pages/Registration";
import Quiz from "./pages/Quiz";
import Brain from "./pages/Brain";
import Live from "./pages/Live";
import Profile from "./pages/Profile";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/brain" element={<Brain />} />
        <Route path="/live" element={<Live />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
