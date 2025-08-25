import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
// import event from "../../assets/images/Events/WineDownWithArt.png";
// (moved to css) import background from "../../assets/images/background.jpg"; 
// https://www.istockphoto.com/vector/spotlight-backdrop-illuminated-blue-stage-background-for-displaying-products-bright-gm1322502570-408449206?searchscope=image%2Cfilm

import { Typography } from "@mui/material";
import logo from "assets/images/Events/bird.png";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import WineBarIcon from '@mui/icons-material/WineBar';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ScheduleIcon from '@mui/icons-material/Schedule';
import HouseboatOutlinedIcon from '@mui/icons-material/HouseboatOutlined';

import "../../App.scss";

const cardStyle = { width: "100%", textAlign: "center" };

const UpcomingEvents = () => {
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
        <>
            <Box className="upcoming-content">
                <div className="testimonial-header" style={{ color: "white" }}>Coming Soon</div>
                <div className="" style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    margin: "2vmin"
                }}>
                    <Paper elevation={4} sx={{ padding: 1, borderRadius: 8, borderStyle: "groove", borderWidth: "2px", borderColor: "#6571edff" }}>
                        <Grid container
                            sx={{
                                width: "30vw",
                            }}

                            display="flex"
                            flexDirection="row"
                            justifyContent="space-around"
                        >
                            <Grid size={12}><Typography variant="h4" sx={{ fontWeight: 800, pb: 2, fontFamily: "Decorative" }} style={cardStyle} >WINE DOWN WITH ART</Typography></Grid>
                            <Grid size={12} display="flex" flexDirection="row" justifyContent="space-around"><img height="50vw" src={logo} alt="BUSC logo" /></Grid>


                            <Grid sx={{ margin: "auto" }}>
                                <div className="dual-icon-row">
                                    <ColorLensIcon /><WineBarIcon /><Typography variant="body1" sx={{ fontWeight: 600 }}>An afternoon of creativity, culture & connection </Typography>
                                </div>
                            </Grid>



                            <Grid size={12}><Typography variant="body1" style={cardStyle} sx={{ fontWeight: 600 }}>Paintings and Photography by </Typography></Grid>
                            <Grid size={12}><Typography variant="body1" style={cardStyle} sx={{ fontWeight: 600 }}>Jae Di and Reggie S.</Typography></Grid>
                            <Grid size={12}><Typography variant="h6" style={cardStyle} sx={{ fontWeight: 800, pt: 5 }}>Save the date...</Typography></Grid>

                            <Grid size={12} display="flex">
                                <div className="single-icon-row"><EventAvailableIcon /><Typography variant="body1" sx={{ fontWeight: 600 }}>**Saturday, October 11, 2025**</Typography></div>
                            </Grid>

                            <Grid size={12} display="flex" sx={{ pb: 5 }}>
                                <div className="single-icon-row"><ScheduleIcon /><Typography variant="body1" sx={{ fontWeight: 600 }}>**12:00PM - 4:00PM**</Typography></div>
                            </Grid>

                            <Grid size={12} display="flex">
                                <div className="single-icon-row"><HouseboatOutlinedIcon /><Typography variant="h6" sx={{ fontWeight: 600 }}>Waters Edge Clubhouse</Typography></div>
                            </Grid>

                            <Grid size={12}><Typography variant="h6" style={cardStyle} sx={{ fontWeight: 600 }}>7115 Waters Edge Dr. #B, Stone Mountain, GA 30087</Typography></Grid>
                            <Grid size={12}><Typography variant="body1" style={cardStyle} sx={{ fontWeight: 600, pt: 5 }}>Free Admission</Typography></Grid>
                            <Grid size={12}><Typography variant="body1" style={cardStyle} sx={{ fontWeight: 600 }}>Wine, Refreshments & Lite Bites</Typography></Grid>
                        </Grid>
                    </Paper>
                </div>
            </Box>
        </>
    );
};

export default UpcomingEvents;
