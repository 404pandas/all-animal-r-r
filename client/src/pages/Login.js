import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations.js";
import Auth from "../utils/auth.js";

// MUI imports
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container>
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className='my-2 input-fill'>
          <TextField
            label='Email:'
            placeholder='youremail@test.com'
            name='email'
            type='email'
            id='email'
            onChange={handleChange}
            className='input-fill'
          ></TextField>
        </div>
        <div className='my-2 input-fill'>
          <TextField
            label='Password:'
            placeholder='******'
            name='password'
            type='password'
            id='pwd'
            onChange={handleChange}
            className='input-fill'
          ></TextField>
        </div>
        {error ? (
          <div>
            <Typography variant='body1' className='error-text'>
              The provided credentials are incorrect
            </Typography>
          </div>
        ) : null}

        <button className='flex-row-end button-margin' type='submit'>
          Submit
        </button>
      </form>
    </Container>
  );
}

export default Login;
