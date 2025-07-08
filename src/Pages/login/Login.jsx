import React from 'react';
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

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #fff, #ede9fe)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 30,
          left: 30,
          fontWeight: 'bold',
          fontSize: 32,
          color: '#6c47ff',
          fontFamily: 'Arial',
        }}
      >
       <Box component={'img'} src={logo}/>
      </Box>

      <Paper
        elevation={3}
        sx={{
          padding: 5,
          borderRadius: 5,
          maxWidth: 400,
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          WELCOME BACK!
        </Typography>
        <Typography variant="body2" mb={3}>
          Better jobs are waiting. Sign in and find your next move.
        </Typography>

        <TextField
          label="Enter Email Address"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
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
          startIcon={<GoogleIcon color='red'/>}
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

      <Box position="absolute" top={20} right={20}>
        <Switch defaultChecked />
      </Box>
    </Box>
  );
}

export default LoginPage