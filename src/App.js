import React, { useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import "App.scss";
import Main from "components/Main.jsx";
import Home from "pages/Home/Home.jsx";
import Gallery from "pages/Gallery/Gallery.jsx";
import Contact from "pages/Contact/Contact.jsx";
import UpcomingEvents from "pages/Upcoming/UpcomingEvents.jsx";
import Testimonials from "pages/Testimonials/Testimonials.jsx";
import logger from "services/LoggingService.js";

function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    const lastPage = sessionStorage.getItem("currentPage");
    if (lastPage) {
      logger.debug("navigate to lastPage");
      mainRef.current.setPage(lastPage);
    }
  }, []);

  return (
    <Main ref={mainRef}>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/upcoming" element={<UpcomingEvents />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </Main>
  );
}

export default App;
