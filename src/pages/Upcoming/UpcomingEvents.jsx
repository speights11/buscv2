import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Image } from "mui-image";
import event from "../../assets/images/Events/WineDownWithArt.png";
// (moved to css) import background from "../../assets/images/background.jpg"; 
// https://www.istockphoto.com/vector/spotlight-backdrop-illuminated-blue-stage-background-for-displaying-products-bright-gm1322502570-408449206?searchscope=image%2Cfilm
import "../../App.scss";

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
                        <Box
                            sx={{
                                width: "100%",
                            }}
                        >
                            <Image style={{ width: "30vw", borderRadius: 10 }} src={event} />
                        </Box>
                    </Paper>
                </div>
            </Box>
        </>
    );
};

export default UpcomingEvents;
