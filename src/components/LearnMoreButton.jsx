/* eslint-disable  react/prop-types */
import React from "react";
import { Button } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function LearnMoreButton({ url }) {
  return (
    <Button
      component="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      variant="outlined"
      color="primary"
      startIcon={<InfoOutlinedIcon />}
      sx={{
        my: 2,
        textTransform: "none",
        "&:hover": {
          backgroundColor: "primary.light",
          color: "white",
        },
      }}
    >
      Jump to Image
    </Button>
  );
}

export default LearnMoreButton;
