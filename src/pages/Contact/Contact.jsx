import React, { useState, useEffect } from "react";
import { Button, FormControl, TextField } from "@mui/material";
import { callAwsEmailSvc } from "components/EmailService";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import NoteIcon from "@mui/icons-material/Note";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import "App.scss";

const errCheck = 0x0000;
const nameErr = 0x0001;
const emailErr = 0x0010;
const messageErr = 0x0100;

const Contact = () => {
  const [client, setClient] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [complete, setComplete] = useState(false);
  const [errorState, setErrorState] = useState(errCheck);

  useEffect(() => {
    try {
      /* eslint-disable-next-line no-undef */
      gtag("event", "VisitContact", {
        event_category: "Pages",
        event_label: "Visit Contact Page",
      });
    } catch (error) {
      console.log(error);
    }
  });

  const handleSubmit = () => {
    setErrorState(errCheck);
    let tstVal = 0x0000;

    if (!client || client.length <= 0) {
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
      callAwsEmailSvc("contact", client, email, message).then(() =>
        setComplete(true),
      );
    }
  };

  return (
    <>
      <div className="billing">
        <h2>ATTENTION</h2>
        <h3>
          For all questions pertaining to order status or billing,
          <br /> please contact our drop shipper at:
        </h3>
        <p>Tel: 1-800-650-5301</p>
        <p>Fax: 514-504-2061</p>
        <p>
          <a href="mailto:billing@pictorem.com">billing@pictorem.com</a>
        </p>
      </div>

      {/* <div className="mailDiv">
        Contact Reggie S. directly here:
        <p>
          <a href="mailto:beinguscreations@gmail.com?subject=contact">
            Contact Us
          </a>
        </p>
      </div>

      <div className="mailDiv">
        Or join our mailing list here:
        <p>
          <a href="mailto:beinguscreations@gmail.com?subject=join">BUSC Join</a>
        </p>
      </div> */}
      <div className="contact-form">
        <h1>Contact Reggie S.</h1>
        <div className={`${complete ? "hidden" : "thank-you"}`}>
          <div className="form-row">
            <FormControl>
              <TextField
                error={errorState & nameErr}
                helperText="Please enter name."
                id="client"
                sx={{ m: 1, minWidth: "20vw", background: "#ffffff" }}
                // label="Name"
                variant="filled"
                onChange={(e) => setClient(e.target.value)}
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
                // label="Email address"
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
            <FormControl>
              <TextField
                error={errorState & messageErr}
                helperText="Please enter comments."
                id="messageFld"
                sx={{ m: 1, minWidth: "45vw", background: "#ffffff" }}
                multiline
                minRows={3}
                // label="Message"
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
          </div>
          <div className="btn">
            <Button
              sx={{ width: "200px" }}
              variant="contained"
              onClick={handleSubmit}
            >
              Send
            </Button>
          </div>
        </div>
        <div className={`${complete ? "thank-you" : "hidden"}`}>
          Thank you for reaching out. Your message has been sent.
        </div>
      </div>
    </>
  );
};

export default Contact;
