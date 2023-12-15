import React from "react";
import { Route, Routes } from "react-router-dom";
import "App.css";
import Main from "components/Main";
import Home from "pages/Home/Home";
import Gallery from "pages/Gallery/Gallery";
import ContactV2 from "pages/Contact/ContactV2";

function App() {
  return (
    <Main>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contactv2 />} />
      </Routes>
    </Main>
  );
}

export default App;
