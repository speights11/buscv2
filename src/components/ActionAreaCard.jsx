/* eslint-disable  react/prop-types */
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import LearnMoreButton from "./LearnMoreButton";
import CardActionArea from "@mui/material/CardActionArea";
import SocialShare from "./SocialShare";

const ActionAreaCard = ({ title, desc, imageUrl, salesUrl }) => {
  const shareUrl = "https://www.beinguscreations.com";
  const shareTitle = "Check out this great art!";

  return (
    <Card
      sx={{
        width: { xs: "90vw", sm: "90vw", md: "70vw", lg: "60vw", xl: "30vw" },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image={imageUrl}
          alt={`Carousel image of ${title}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ my: 1, py: 0, color: "text.secondary" }}
          >
            {desc}
          </Typography>
        </CardContent>
        <CardActions sx={{ py: 0 }}>
          <SocialShare url={shareUrl} title={shareTitle} />
          <LearnMoreButton url={salesUrl} />
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default ActionAreaCard;
