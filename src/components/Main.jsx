import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeIcon from "@mui/icons-material/Home";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import CollectionsIcon from "@mui/icons-material/Collections";
import TestimonialsIcon from "@mui/icons-material/ThumbUp";
import { isMobileOnly, isTablet } from "react-device-detect";
import PropTypes from "prop-types";
import logo from "assets/images/logo.png";
import logger from "services/LoggingService.js";

import "App.scss";

const _fontSz = isTablet ? "0.4vmin" : isMobileOnly ? "1.7vmin" : "0.6vw";

const Main = forwardRef(({ children }, ref) => {
  Main.displayName = "Main";
  const [pageNumber, setPageNumber] = useState(0);
  const navigate = useNavigate();
  const routePath = ["/home", "/gallery", "/testimonials", "/contact"];

  const setPage = (requestedPage) => {
    logger.debug(`setPage: ${requestedPage}  CurrentPage: ${pageNumber}`);
    if (requestedPage !== pageNumber) {
      // navigate(routePath[requestedPage]);
      setPageNumber(requestedPage);
    }
  };

  useImperativeHandle(ref, () => ({
    setPage,
  }));

  useEffect(() => {
    navigate(routePath[pageNumber]);
  }, [pageNumber]);

  const handleChange = (event, pageNumber) => {
    setPageNumber(pageNumber);

    try {
      /* eslint-disable-next-line no-undef */
      gtag("event", "Navigation", {
        event_category: "Pages",
        event_label: `Navigating to ${routePath[pageNumber]}`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app-frame">
      <div className="header">
        <div>
          <img src={logo} alt="BUSC logo" />
        </div>
        <div>
          <p className="HeaderTitle">Being Us Creations</p>
        </div>
        <div className="links">
          <div>
            <Tabs
              value={pageNumber}
              onChange={handleChange}
              aria-label="icon tabs example"
            >
              <Tab
                key={0}
                value={0}
                icon={<HomeIcon />}
                aria-label="home"
                label="home"
                sx={{ fontSize: _fontSz, fontWeight: 800 }}
              />
              <Tab
                key={1}
                value={1}
                icon={<CollectionsIcon />}
                aria-label="gallery"
                label="gallery"
                sx={{ fontSize: _fontSz, fontWeight: 800 }}
              />
              <Tab
                key={2}
                value={2}
                icon={<TestimonialsIcon />}
                aria-label="testimonials"
                label="testimonials"
                sx={{ fontSize: _fontSz, fontWeight: 800 }}
              />
              <Tab
                key={3}
                value={3}
                icon={<ContactPageIcon />}
                aria-label="contact"
                label="contact us"
                sx={{ fontSize: _fontSz, fontWeight: 800 }}
              />
            </Tabs>
          </div>
        </div>
      </div>
      <div className="main-content">
        {children}
        <div className={`${pageNumber === 1 ? "hidden" : "footer"}`}>
          <h4>Being Us Creations</h4>
          <div className="address">
            <p>4002 Hwy 78</p>
            <p>Suite 530-199</p>
            <p>Snelleville, GA 30039</p>
          </div>
          <div className="copyright">
            Copyright &#169;2023 Being Us Creations All Rights Reserved.
            <br />
            All photographs appearing on this site are the property of Being Us
            Creations. They are protected by U.S. Copyright Laws and are not to
            be downloaded or reproduced in any way without the express written
            permission of Being Us Creations.
          </div>
        </div>
      </div>
    </div>
  );
});

Main.propTypes = {
  children: PropTypes.any,
};

export default Main;
