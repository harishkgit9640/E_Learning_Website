import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { NavLink } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useCookies } from 'react-cookie';

const theme = createTheme();
const Login = () => {
  // <>
  //     <Alert severity="error">Page Not Found!</Alert>
  //     <Alert severity="success">This is a success alert — check it out!</Alert>
  const [setCookies] = useCookies();
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const handleInput = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setData((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "get",
      url: "http://127.0.0.1:5000/users"
    })
      .then(response => {
        for (var user of response.data) {
          if (user.email === data.email && user.password === data.password) {
            setCookies("userName", user.firstName);
            navigate("/home");
            break;
          } else {
            navigate("/error");
          }
        }
      })
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={handleInput}
              value={data.email}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              onChange={handleInput}
              value={data.password}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Grid textAlign={'right'}>
              <NavLink to="#" variant="body2">
                Forgot password?
              </NavLink>
            </Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>

            <Grid item>
              Don't have an account?
              <NavLink to="/signup" variant="body2">
                Sign Up
              </NavLink>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
