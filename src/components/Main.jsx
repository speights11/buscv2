/* eslint-disable spaced-comment */
import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import Image from "mui-image";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeIcon from "@mui/icons-material/Home";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import CollectionsIcon from "@mui/icons-material/Collections";
import TestimonialsIcon from "@mui/icons-material/ThumbUp";
//TODO: Add UpcomingEvents
// import TheatersIcon from '@mui/icons-material/Theaters';
// import { isMobileOnly, isTablet } from "react-device-detect";
import PropTypes from "prop-types";
import logo from "assets/images/logo.png";
import logger from "services/LoggingService.js";

import "App.scss";

const Main = forwardRef(({ children }, ref) => {
  Main.displayName = "Main";
  const iconSize = {
    xs: 20,
    sm: 20,
    md: 35,
    lg: 30,
    xl: 40,
  };

  const iconFontSize = {
    xs: "1.5vw",
    sm: "1.2vw",
    md: "1.0vw",
    lg: "0.5vw",
    xl: "0.7vw",
  };
  const [pageNumber, setPageNumber] = useState(0);
  const navigate = useNavigate();
  const routePath = [
    "/home",
    "/gallery",
    "/upcoming",
    "/testimonials",
    "/contact",
  ];

  const setPage = (requestedPage) => {
    logger.debug(`setPage: ${requestedPage}  CurrentPage: ${pageNumber}`);
    if (requestedPage !== pageNumber) {
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

  //TODO: Add UpcomingEvents - line93

  return (
    <>
      <Grid
        sx={{
          margin: "auto",
          border: 1,
          borderRadius: 2,
          background: "#a6a27d",
        }}
        container
        width={{ xs: "90%", sm: "70%", md: "60%", lg: "90%", xl: "90%" }}
        display="flex"
        flexDirection="row"
        justifyContent="center"
      >
        <Grid
          display="flex"
          flexDirection="row"
          justifyContent="center"
          sx={{ margin: "auto" }}
          size={{ xs: 12, sm: 12, md: 12, lg: 2, xl: 2 }}
        >
          <Box width={{ xs: 100, sm: 100, md: 150, lg: 200, xl: 250 }}>
            <Image fit="contain" src={logo} alt="BUSC logo" />
          </Box>
        </Grid>
        <Grid
          display="flex"
          flexDirection="row"
          justifyContent="center"
          sx={{ mx: "auto" }}
          size={{ xs: 12, sm: 12, md: 12, lg: 5, xl: 5 }}
        >
          <Box
            sx={{ py: { xs: 0, sm: 1, md: 2, lg: 4, xl: 5 } }}
            class="HeaderTitle"
          >
            Being Us Creations
          </Box>
        </Grid>
        <Grid
          display="flex"
          flexDirection="row"
          justifyContent="center"
          sx={{ margin: "auto" }}
          size={{ xs: 10, sm: 10, md: 10, lg: 4, xl: 4 }}
        >
          <Tabs
            value={pageNumber}
            onChange={handleChange}
            variant="scrollable"
            aria-label="icon tabs example"
          >
            <Tab
              key={0}
              value={0}
              icon={<HomeIcon sx={{ fontSize: iconSize }} />}
              aria-label="home"
              label="home"
              sx={{ fontSize: iconFontSize, fontWeight: 800 }}
            />
            <Tab
              key={1}
              value={1}
              icon={<CollectionsIcon sx={{ fontSize: iconSize }} />}
              aria-label="gallery"
              label="gallery"
              sx={{ fontSize: iconFontSize, fontWeight: 800 }}
            />
            {/* <Tab
                  key={2}
                  value={2}
                  icon={<TheatersIcon sx={{fontSize:iconSize}}/>}
                  aria-label="upcoming"
                  label="upcoming events"
                  sx={{ fontSize: iconSize, fontWeight: 800 }}
                /> */}
            <Tab
              key={3}
              value={3}
              icon={<TestimonialsIcon sx={{ fontSize: iconSize }} />}
              aria-label="testimonials"
              label="testimonials"
              sx={{ fontSize: iconFontSize, fontWeight: 800 }}
            />
            <Tab
              key={4}
              value={4}
              icon={<ContactPageIcon sx={{ fontSize: iconSize }} />}
              aria-label="contact"
              label="contact us"
              sx={{ fontSize: iconFontSize, fontWeight: 800 }}
            />
          </Tabs>
        </Grid>
      </Grid>
      <div className="main-content">
        <Box>{children}</Box>
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
    </>
  );
});

Main.propTypes = {
  children: PropTypes.any,
};

export default Main;
