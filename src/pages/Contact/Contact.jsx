import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { callAwsEmailSvc } from "components/EmailService";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import NoteIcon from "@mui/icons-material/Note";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import "App.css";

const errCheck = 0x0000;
const nameErr = 0x0001;
const emailErr = 0x0010;
const messageErr = 0x0100;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [complete, setComplete] = useState(false);
  const [errorState, setErrorState] = useState(errCheck);

  const handleSubmit = () => {
    setErrorState(errCheck);
    let tstVal = 0x0000;

    if (!name || name.length <= 0) {
      tstVal = tstVal | nameErr;
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      tstVal = tstVal | emailErr;
    }

    if (!message || message.length <= 0) {
      tstVal = tstVal | messageErr;
    }

    if (tstVal > errCheck) {
      setErrorState(tstVal);
    } else {
      callAwsEmailSvc("contact", name, email, message).then(() =>
        setComplete(true),
      );
    }
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <div className={`${complete ? "hidden" : "thank-you"}`}>
        <form>
          <div className="form-row">
            <FormControl>
              <TextField
                error={errorState & nameErr}
                helperText="Please enter name."
                id="nameFld"
                sx={{ m: 1, minWidth: "20vw", background: "#ffffff" }}
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
                error={errorState & emailErr}
                helperText="Please enter valid email."
                id="emailFld"
                sx={{ m: 1, minWidth: "20vw", background: "#ffffff" }}
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

          <FormControl>
            <TextField
              error={errorState & messageErr}
              helperText="Please enter comments."
              id="messageFld"
              sx={{ m: 1, minWidth: "40vw", background: "#ffffff" }}
              multiline
              minRows={3}
              label="Message"
              variant="filled"
              onChange={(e) => setMessage(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <NoteIcon />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <div className="btn">
            <Button
              sx={{ width: "200px" }}
              variant="contained"
              onClick={handleSubmit}
            >
              Send
            </Button>
          </div>
        </form>
      </div>
      <div className={`${complete ? "thank-you" : "hidden"}`}>
        Thank you for reaching out. Your message has been sent.
      </div>
    </div>
  );
};

export default Contact;
