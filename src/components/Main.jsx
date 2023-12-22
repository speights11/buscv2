import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeIcon from "@mui/icons-material/Home";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import CollectionsIcon from "@mui/icons-material/Collections";
import PropTypes from "prop-types";
import logo from "assets/images/logo.png";

import "App.css";

const Main = ({ children }) => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const routePath = ["/home", "/gallery", "/contact"];

  const handleChange = (event, pageNumber) => {
    console.log(`pageNumber: ${pageNumber}`);
    setValue(pageNumber);
    navigate(routePath[pageNumber]);
  };

  return (
    <div className="app-frame">
      <div className="image-frame header">
        <div className="">
          <img src={logo} alt="BUSC logo" />
        </div>
        <div>
          <p className="HeaderTitle">Being Us Creations</p>
        </div>
        <div className="links">
          <div>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="icon tabs example"
            >
              <Tab icon={<HomeIcon />} aria-label="home" label="home" />
              <Tab
                icon={<CollectionsIcon />}
                aria-label="gallery"
                label="gallery"
              />
              <Tab
                icon={<ContactPageIcon />}
                aria-label="contact"
                label="contact us"
              />
            </Tabs>
          </div>
        </div>
      </div>
      <div className="main-content">
        {children}
        <div className="footer">
          <h4>Being Us Creations</h4>
          <div className="address">
            <p>4002 Hwy 78</p>
            <p>Suite 530-199</p>
            <p>Snelleville, GA 30039</p>
          </div>
          <div className="copyright">
            Copyright &#169;2023 Being Us Creations All Rights Reserved.
            <br />
            All photographs appearing on this site are the property of Being Us
            Creations. They are protected by U.S. Copyright Laws and are not to
            be downloaded or reproduced in any way without the express written
            permission of Being Us Creations.
          </div>
        </div>
      </div>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.any,
};

export default Main;
