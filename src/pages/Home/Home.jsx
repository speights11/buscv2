import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Select from "@mui/material/Select";
import EmailIcon from "@mui/icons-material/Email";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import NoteIcon from "@mui/icons-material/Note";
import Button from "@mui/material/Button";
import { callAwsEmailSvc } from "components/EmailService";
import gina from "assets/images/gina2.png";
import "App.css";

const Home = () => {
  const [source, setSource] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [complete, setComplete] = useState(false);
  const options = ["From a friend", "Internet Search", "An Art Show", "Other"];

  const handleChange = (event) => {
    setSource(event.target.value);
  };

  const handleSubmit = () => {
    const msg = source === 3 ? `Other: ${message}` : `${options[source]}`;
    callAwsEmailSvc("join", name, email, msg).then(() => setComplete(true));
  };

  return (
    <>
      <div className="home-content">
        <div className="intro">
          <hr />
          AN EXCITING NEW COLLECTION OF ORIGINAL ART <hr />
          <h4>Brought to you by Reggie S.</h4>
        </div>

        <div className="image-frame">
          <img src={gina} alt="Gina at 1st annual art show" />
        </div>

        <div className={`${complete ? "hidden" : "keep-in-touch"}`}>
          <h1>Let&apos;s Keep In Touch</h1>

          <p>
            Please join our mailing list to hear about upcoming shows and new
            arrivals.
          </p>

          <div className="form-row">
            <FormControl>
              <TextField
                sx={{ m: 1, minWidth: "25vw", background: "#ffffff" }}
                label="Name"
                variant="filled"
                onChange={(e) => setName(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SupervisedUserCircleIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>

            <FormControl>
              <TextField
                sx={{ m: 1, minWidth: "25vw", background: "#ffffff" }}
                label="Email address"
                variant="filled"
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </div>

          <div className="form-row">
            <FormControl sx={{ m: 1, minWidth: "20vw" }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                How did you hear about us?
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={source}
                onChange={handleChange}
                sx={{ m: 1, minWidth: 300, background: "#ffffff" }}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={0}>From a friend</MenuItem>
                <MenuItem value={1}>Internet Search</MenuItem>
                <MenuItem value={2}>An Art Show</MenuItem>
                <MenuItem value={3}>Other</MenuItem>
              </Select>
            </FormControl>

            <FormControl>
              <TextField
                sx={{ m: 1, minWidth: "30vw", background: "#ffffff" }}
                label="Other"
                variant="filled"
                onChange={(e) => setMessage(e.target.value)}
                disabled={source !== 3}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <NoteIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </div>

          <Button
            sx={{ width: "200px" }}
            variant="contained"
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
        </div>

        <div className={`${complete ? "thank-you" : "hidden"}`}>
          Thank you for reaching out. Your message has been sent.
        </div>
      </div>
    </>
  );
};

export default Home;
