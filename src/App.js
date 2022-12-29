import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Header from "./menu/Header";
import About from "./pages/About";
import Rules from "./pages/Rules";
function App() {
  return (
    // <>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/Rules" element={<Rules />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    // </>
    // <Home />
  );
}

export default App;
