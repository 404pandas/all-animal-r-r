import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

// MUI imports
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography/index.js";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <div>
      <Typography variant='h3'>Contact Me:</Typography>
      <div id='contact-form' onSubmit={handleSubmit}>
        <TextField
          required
          id='outlined-required'
          className='contact-input'
          label='Name:'
          defaultValue={name}
          onBlur={handleChange}
        />
        <TextField
          required
          id='outlined-required'
          className='contact-input'
          label='Email:'
          defaultValue={email}
          onBlur={handleChange}
        />
        <TextField
          required
          id='outlined-required'
          className='contact-input'
          label='Message:'
          defaultValue={message}
          onBlur={handleChange}
        />
        {errorMessage && (
          <div>
            <Typography variant='body2' className='error-text'>
              {errorMessage}
            </Typography>
          </div>
        )}
        <Button type='submit'>Submit</Button>
      </div>
    </div>
  );
}

export default ContactForm;
