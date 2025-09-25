/* eslint-disable spaced-comment */
import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import Image from "mui-image";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import CollectionsIcon from "@mui/icons-material/Collections";
import TestimonialsIcon from "@mui/icons-material/ThumbUp";
//TODO: Add UpcomingEvents
import TheatersIcon from "@mui/icons-material/Theaters";
// import { isMobileOnly, isTablet } from "react-device-detect";
import PropTypes from "prop-types";
import logo from "assets/images/logo.png";
import logger from "services/LoggingService.js";

import "App.scss";

const Main = forwardRef(({ children }, ref) => {
  Main.displayName = "Main";
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

  return (
    <>
      <Paper elevation={8}>
        <Grid
          sx={{
            pt: 1,
            margin: "auto",
            borderBottom: 3,
            borderColor: "#999696ff",
            background: "#a6a27d",
          }}
          container
          width="100%"
          display="flex"
          flexDirection="row"
          justifyContent="center"
        >
          <Grid
            display="flex"
            flexDirection="row"
            justifyContent="center" //{{ md: "center", lg: "flex-start" }}
            sx={{ px: 5 }}
            size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}
          >
            <Box width={{ xs: 100, sm: 100, md: 150, lg: 200, xl: 250 }}>
              <Image fit="contain" src={logo} alt="BUSC logo" />
            </Box>
          </Grid>

          {/* ******************* TABS ********************* */}
          <Grid
            display="flex"
            justifyContent={{ md: "center", lg: "flex-end" }}
            sx={{ px: { xs: 1, lg: 3 } }}
            size={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }}
          >
            <Tabs
              value={pageNumber}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              aria-label="responsive tabs"
            >
              <Tab
                key={0}
                value={0}
                icon={
                  <HomeIcon sx={{ fontSize: { xs: 18, sm: 20, md: 22 } }} />
                }
                label="Home"
                sx={{
                  fontSize: { xs: 8, sm: 10, md: 11 },
                  fontWeight: 800,
                  minWidth: { xs: 80, sm: 100, md: 120 },
                }}
              />
              <Tab
                key={1}
                value={1}
                icon={
                  <CollectionsIcon
                    sx={{ fontSize: { xs: 18, sm: 20, md: 22 } }}
                  />
                }
                label="Gallery"
                sx={{
                  fontSize: { xs: 8, sm: 10, md: 11 },
                  fontWeight: 800,
                  minWidth: { xs: 80, sm: 100, md: 120 },
                }}
              />
              <Tab
                key={2}
                value={2}
                icon={
                  <TheatersIcon sx={{ fontSize: { xs: 18, sm: 20, md: 22 } }} />
                }
                label="Upcoming Events"
                sx={{
                  fontSize: { xs: 8, sm: 10, md: 11 },
                  fontWeight: 800,
                  minWidth: { xs: 100, sm: 120, md: 140 },
                }}
              />
              <Tab
                key={3}
                value={3}
                icon={
                  <TestimonialsIcon
                    sx={{ fontSize: { xs: 18, sm: 20, md: 22 } }}
                  />
                }
                label="Testimonials"
                sx={{
                  fontSize: { xs: 8, sm: 10, md: 11 },
                  fontWeight: 800,
                  minWidth: { xs: 90, sm: 110, md: 130 },
                }}
              />
              <Tab
                key={4}
                value={4}
                icon={
                  <ContactPageIcon
                    sx={{ fontSize: { xs: 18, sm: 20, md: 22 } }}
                  />
                }
                label="Contact Us"
                sx={{
                  fontSize: { xs: 8, sm: 10, md: 11 },
                  fontWeight: 800,
                  minWidth: { xs: 90, sm: 110, md: 130 },
                }}
              />
            </Tabs>
          </Grid>
        </Grid>
      </Paper>
      <div className="main-content">
        <Box>{children}</Box>
        <div className={`${pageNumber === 1 ? "hidden" : "footer"}`}>
          <Box sx={{ p: 1 }}>
            <Typography variant="h6">Being Us Creations</Typography>
          </Box>
          <Box sx={{ p: 1 }}>
            <Typography variant="body2">4002 Hwy 78</Typography>
          </Box>
          <Box sx={{ p: 1 }}>
            <Typography variant="body2">Suite 530-199</Typography>
          </Box>
          <Box sx={{ p: 1 }}>
            <Typography variant="body2">Snelleville, GA 30039</Typography>
          </Box>
          <Box sx={{ p: 1 }}>
            <Typography variant="caption">
              Copyright &#169;2023 Being Us Creations All Rights Reserved.
              <br />
              All photographs appearing on this site are the property of Being
              Us Creations. They are protected by U.S. Copyright Laws and are
              not to be downloaded or reproduced in any way without the express
              written permission of Being Us Creations.
            </Typography>
          </Box>
        </div>
      </div>
    </>
  );
});

Main.propTypes = {
  children: PropTypes.any,
};

export default Main;
