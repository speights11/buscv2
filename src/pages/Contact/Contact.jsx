import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import {
  EMAIL_SVC,
  mailStruct,
  callAwsEmailSvc,
} from "components/EmailService";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import NoteIcon from "@mui/icons-material/Note";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import "App.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [complete, setComplete] = useState(false);

  const handleSubmit = () => {
    const message = { ...mailStruct };
    message.svc = EMAIL_SVC.contact;
    message.name = name;
    message.address = email;
    message.comments = comments;

    callAwsEmailSvc(message).then(() => setComplete(true));
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <div className={`${complete ? "hidden" : "thank-you"}`}>
        <form>
          <div className="form-row">
            <FormControl>
              <TextField
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
              sx={{ m: 1, minWidth: "40vw", background: "#ffffff" }}
              multiline
              minRows={3}
              label="Comments"
              variant="filled"
              onChange={(e) => setComments(e.target.value)}
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
