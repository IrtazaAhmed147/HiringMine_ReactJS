import React, { useRef } from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Paper,
  Switch
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import GoogleIcon from '@mui/icons-material/Google';
import { useState } from 'react';
import logo from '../../assets/logo.png'
import useFetch from '../../hooks/useFetch.jsx'
import axios from 'axios';
import { useSelector } from 'react-redux';
import SwitchCom from '../../Components/switch/SwitchCom.jsx';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const username = useRef('')
  const password = useRef('')



  const { theme } = useSelector((state) => state.theme)
  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClick = async () => {
    console.log(username.current);
    console.log(password.current);

    try {
      const response = await axios.post('https://hiringmine-railway-development.up.railway.app/api/auth/login', {
        email: username.current,
        password: password.current
      })
      console.log(response);

    } catch (error) {
      console.log(error);

    }

  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: theme === 'dark' ? 'rgb(41, 41, 48)' : 'white',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '90%', margin: '20px' }}>

      <Link to={'/'}>
        <Box component={'img'} src={logo} width={'146px'} />
      </Link>

       <SwitchCom />

      </Box>
      <Paper
        elevation={3}
        sx={{
          padding: 5,
          borderRadius: 5,
          maxWidth: 400,
          width: '100%',
          textAlign: 'center',
        backgroundColor: theme === 'dark' ? 'rgb(37, 37 ,42)' : 'white',

        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom color={theme === 'dark' ? 'white': 'black'}>
          WELCOME BACK!
        </Typography>
        <Typography color={theme === 'dark' ? 'white': 'black'} variant="body2" mb={3}>
          Better jobs are waiting. Sign in and find your next move.
        </Typography>

        <TextField
          onChange={(e) => username.current = e.target.value}
          label="Enter Email Address"
          fullWidth
          margin="normal"
          variant="outlined"
          sx={{color: theme === 'dark' ? 'white': 'black'}}
        />
        <TextField
          onChange={(e) => password.current = e.target.value}
          label="Enter Password"
          fullWidth
          margin="normal"
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePassword} edge="end">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: '#6c47ff',
            color: '#fff',
            textTransform: 'none',
            fontWeight: 'bold',
            boxShadow: 2,
            '&:hover': {
              backgroundColor: '#5a3dcc',
            },
          }}
          onClick={handleClick}
        >
          Login
        </Button>

        <Box textAlign="right" mt={1}>
          <Typography variant="body2" color="#6c47ff" sx={{ cursor: 'pointer' }}>
            Forgot Password?
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }}>or</Divider>

        <Button
          fullWidth
          startIcon={<GoogleIcon color='red' />}
          variant="outlined"
          sx={{
            textTransform: 'none',
            fontWeight: 'bold',
            color: '#6c47ff',
            borderColor: '#6c47ff',
            '&:hover': {
              borderColor: '#5a3dcc',
              backgroundColor: '#f5f3ff',
            },
          }}
        >
          Sign In With Google
        </Button>

        <Typography mt={3}>
          Don’t have an account?{' '}
          <span style={{ color: '#6c47ff', cursor: 'pointer' }}>Join Now</span>
        </Typography>
      </Paper>


    </Box>
  );
}

export default LoginPage