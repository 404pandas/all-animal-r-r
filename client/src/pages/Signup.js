import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth.js";
import { ADD_USER } from "../utils/mutations.js";

// MUI components
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

function Signup(props) {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <Container>
        <Typography variant='h3'>Signup</Typography>
        <form onSubmit={handleFormSubmit}>
          <div className='my-2 input-fill'>
            <TextField
              className='input-fill'
              label='First Name:'
              placeholder='First'
              name='firstName'
              type='firstName'
              id='firstName'
              onChange={handleChange}
            ></TextField>
          </div>
          <div className='my-2 input-fill'>
            <TextField
              className='input-fill'
              label='Last Name:'
              placeholder='Last'
              name='lastName'
              type='lastName'
              id='lastName'
              onChange={handleChange}
            ></TextField>
          </div>
          <div className='my-2 input-fill'>
            <TextField
              className='input-fill'
              label='Username:'
              placeholder='404Pandas'
              name='username'
              type='username'
              id='username'
              onChange={handleChange}
            ></TextField>
          </div>
          <div className='my-2 input-fill'>
            <TextField
              className='input-fill'
              label='Email:'
              placeholder='youremail@test.com'
              name='email'
              type='email'
              id='email'
              onChange={handleChange}
            ></TextField>
          </div>
          <div className='my-2 input-fill'>
            <TextField
              className='input-fill'
              label='Password:'
              placeholder='******'
              name='password'
              type='password'
              id='pwd'
              onChange={handleChange}
            ></TextField>
          </div>
          <div className='flex-row-end'>
            <button className='button-margin' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default Signup;
