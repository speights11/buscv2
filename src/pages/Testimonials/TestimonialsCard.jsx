import React, { useState, useRef } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/system/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LinesEllipsis from "react-lines-ellipsis";
import Collapse from "@mui/material/Collapse";
import { styled } from "@mui/material/styles";
import ShareIcon from "@mui/icons-material/Share";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";
import {
  FacebookShareButton,
  FacebookIcon,
  // PinterestShareButton,
  // PinterestIcon,
  EmailShareButton,
  EmailIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Tooltip from "@mui/material/Tooltip";

import "../../App.scss";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const TestimonialsCard = (props) => {
  const descRef = useRef();
  const iconSize = 75;
  const [expanded, setExpanded] = React.useState(false);
  const [dlgOpen, openDialog] = useState(false);
  const [showChevron, setShowChevron] = useState(false);

  const handleReflow = (rleState) => {
    console.log(rleState.text);
    setShowChevron(rleState.text && rleState.clamped);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => {
    openDialog(false);
  };

  const isValidUrl = (urlString) => {
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i",
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
  };

  const jumpTo = (url) => {
    if (isValidUrl(props.link)) {
      window.location.href = props.link;
    }
  };

  return (
    <div>
      <Card
        raised={true}
        sx={{
          width: "30vw",
          height: "100%",
          // minWidth: "20vw",
          ":hover": {
            boxShadow: 24,
          },
        }}
      >
        <CardHeader
          title={props.title}
          subheader={props.subTitle}
          action={
            <IconButton aria-label="share">
              <Tooltip
                title={<Typography fontSize={20}>Share</Typography>}
                placement="top"
              >
                <ShareIcon
                  onClick={() => {
                    openDialog(true);
                  }}
                />
              </Tooltip>
            </IconButton>
          }
        />
        <CardMedia
          sx={{
            maxWidth: "96%",
            maxHeight: "50vh",
            // borderRadius: 8,
            objectFit: "contain",
            pl: "2%",
            ":hover": {
              boxShadow: 5,
            },
          }}
          className="zoom-in"
          component="img"
          image={props.image}
          onClick={() => {
            jumpTo(props.link);
          }}
        />
        <CardContent sx={{ display: expanded ? "none" : "block" }}>
          <Typography
            className="ellipsis"
            variant="body2"
            color="black"
            weight="bold"
          >
            <LinesEllipsis
              ref={descRef}
              text={props.description}
              maxLine="2"
              ellipsis="..."
              trimRight
              basedOn="letters"
              onReflow={(e) => {
                handleReflow(e);
              }}
            />
          </Typography>
        </CardContent>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Tooltip
            title={
              <Typography fontSize={20}>
                {expanded ? "Show Less" : "Read More"}
              </Typography>
            }
            placement="top"
          >
            <ExpandMoreIcon
              sx={{
                display: showChevron ? "block" : "none",
                fontSize: 30,
                color: "#000000",
              }}
            />
          </Tooltip>
        </ExpandMore>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography
              variant="body2"
              color="black"
              weight="bold"
              style={{ wordWrap: "break-word" }}
            >
              {props.description}
            </Typography>
          </CardContent>
        </Collapse>
        <Dialog
          maxWidth={600}
          open={dlgOpen}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="id">
            <Box display="flex" alignItems="center">
              <Box flexGrow={1}>{"Share Image"}</Box>
              <Box>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>
          </DialogTitle>
          <DialogContent>
            <div>
              <CardActions>
                {/* <PinterestShareButton
                  url="https://www.beinguscreations.com"
                  media={"https://www.beinguscreations.com/siteImg.png"}
                  beforeOnClick={() => handleClose()}
                >
                  <PinterestIcon size={iconSize} round={true} />
                </PinterestShareButton> */}
                <FacebookShareButton
                  url="https://www.beinguscreations.com"
                  beforeOnClick={() => handleClose()}
                >
                  <FacebookIcon size={iconSize} round={true} />
                </FacebookShareButton>
                <EmailShareButton
                  url="https://www.beinguscreations.com"
                  subject="Great New Art Site!"
                  beforeOnClick={() => handleClose()}
                >
                  <EmailIcon size={iconSize} round={true} />
                </EmailShareButton>
                <LinkedinShareButton
                  url="https://www.beinguscreations.com"
                  title="Great Online Art Store"
                  summary="Being Us Creations is a great place to find unbelieveable art by Regina Speights, an exceptional new talent on the art scene. Get her work now before she blows up!!"
                  source="https://www.beinguscreations.com"
                  beforeOnClick={() => handleClose()}
                >
                  <LinkedinIcon size={iconSize} round={true} />
                </LinkedinShareButton>
              </CardActions>
            </div>
          </DialogContent>
        </Dialog>
      </Card>
    </div>
  );
};

TestimonialsCard.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.any,
};

export default TestimonialsCard;
