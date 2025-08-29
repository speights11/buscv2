import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Image from "mui-image";
import event from "assets/images/Events/WineDownWithArt2.png";
import "../../App.scss";
import { Typography } from "@mui/material";

const UpcomingEvents = () => {
  const hdrFontSize = {
    xs: "4.5vw",
    sm: "4.5vw",
    md: "4.5vw",
    lg: "4.5vw",
    xl: "4.5vw",
  };

  useEffect(() => {
    try {
      sessionStorage.setItem("currentPage", "2");

      /* eslint-disable-next-line no-undef */
      gtag("event", "VisitUpcomingEvents", {
        event_category: "Pages",
        event_label: "Visit Upcoming Events Page",
      });
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <Grid container size={12}>
      <div className="home-content">
        <Box
          className="upcoming-content"
          sx={{ my: 5, mx: "auto", width: "90%" }}
        >
          <Grid
            item
            size={12}
            display="flex"
            flexDirection="row"
            justifyContent="center"
          >
            <Typography
              style={{ fontFamily: " 'Cinzel Decorative', serif;" }}
              variant="h1"
              fontSize={hdrFontSize}
            >
              Coming Soon
            </Typography>
          </Grid>
          <Grid
            size={12}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              margin: "2vmin",
            }}
          >
            <Typography variant="h6" fontSize={"2vw"}>
              (click below to RSVP)
            </Typography>
          </Grid>
          <Grid
            item
            size={12}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              margin: "2vmin",
            }}
          >
            <Link
              href="https://partiful.com/e/FF3JeA6Gh5JeGojJ1pme"
              underline="none"
              rel="noreferrer noopener"
              target="__blank"
            >
              <Image
                sx={{ border: 2, borderRadius: { xs: 3, md: 6, xl: 8 } }}
                src={event}
                width="40vw"
              />
            </Link>
          </Grid>
        </Box>
      </div>
    </Grid>
  );
};

export default UpcomingEvents;
