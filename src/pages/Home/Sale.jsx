import React from "react";
import { Typography, Box } from "@mui/material";

import "../../App.scss";

const Sale = () => {

    return (
        <>
            <div className="sale-div">
                <Box sx={{}} className="sale-cell">
                    {/* <Typography variant="h1" class="sale-body">2025</Typography> */}
                    <Typography variant="h1" sx={{ textAlign: "center" }} class="sale-title">2025<br />Summer Sale</Typography>
                </Box>
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h5">All art pieces</Typography>
                    <Typography variant="h5">up to 25% off!</Typography>
                </Box>
                <Typography variant="h6" className="sale-disclaimer">Sale prices valid on orders completed by Midnight, Aug 31, 2025.</Typography>
            </div >
        </>
    );
};

export default Sale;
