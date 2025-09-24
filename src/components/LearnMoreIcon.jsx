import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function LearnMoreIcon({ url }) {
  return (
    <Tooltip title="Learn More">
      <IconButton
        component="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
        size="large"
        sx={{
          border: "1px solid",
          borderColor: "primary.main",
          "&:hover": {
            backgroundColor: "primary.light",
            color: "white",
          },
        }}
      >
        <InfoOutlinedIcon />
      </IconButton>
    </Tooltip>
  );
}

export default LearnMoreIcon;
