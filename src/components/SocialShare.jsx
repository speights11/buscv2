/* eslint-disable  react/prop-types */
import React from "react";
import Grid from "@mui/material/Grid";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";

const SocialShare = ({ url, title }) => {
  return (
    <Grid
      container
      size="grow"
      display="flex"
      flexDirection="row"
      justifyContent="flex-start"
      gap={3}
    >
      <Grid>
        <FacebookShareButton url={url} quote={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </Grid>

      <Grid>
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </Grid>

      <Grid>
        <LinkedinShareButton url={url} title={title}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </Grid>
    </Grid>
  );
};

export default SocialShare;
