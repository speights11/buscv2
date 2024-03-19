import React from "react";
import { Route, Routes } from "react-router-dom";
import "App.scss";
import Main from "components/Main.jsx";
import Home from "pages/Home/Home.jsx";
import Gallery from "pages/Gallery/Gallery.jsx";
import Contact from "pages/Contact/Contact.jsx";

function App() {
  return (
    <Main>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Main>
  );
}

export default App;
