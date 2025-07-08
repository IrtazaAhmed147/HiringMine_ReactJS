import React, { useState } from 'react';
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
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'


function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(to bottom, #fff, #ede9fe)',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                flexDirection: 'column',
                width: '100%'
            }}
        >
         
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: "center",
                width: '100%',
                padding: '20px'
            }}>
                

                <Box
                    sx={{
                        
                        fontWeight: 'bold',
                        fontSize: 32,
                        color: '#6c47ff',
                        fontFamily: 'Arial',
                    }}
                    >
                  <Box component={'img'} src={logo}/>
                </Box>

                <Box >
                    <Switch defaultChecked />
                </Box>
            
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    marginTop:'50px'
                }}
            >
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
                        LET’S GET STARTED
                    </Typography>
                    <Typography variant="body2" mb={3}>
                        Create an account to get recommended jobs that match your resume and apply to multiple jobs in seconds!
                    </Typography>

                    <TextField label="User Name" fullWidth margin="normal" variant="outlined" />
                    <TextField label="First Name" fullWidth margin="normal" variant="outlined" />
                    <TextField label="last Name" fullWidth margin="normal" variant="outlined" />
                    <TextField label="Enter Email Address" fullWidth margin="normal" variant="outlined" />

                    <TextField
                        label="Enter Password"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        type={showPassword ? 'text' : 'password'}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        label="Confirm Password"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        type={showConfirmPassword ? 'text' : 'password'}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end">
                                        {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Typography variant="caption" display="block" mt={2} mb={2}>
                        By clicking Agree & Join, you agree to the Hiring Mine User Agreement, Privacy Policy, and Cookie Policy.
                    </Typography>

                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
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
                        Agree & Join
                    </Button>

                    <Divider sx={{ my: 3 }}>or</Divider>

                    <Button
                        fullWidth
                        startIcon={<GoogleIcon />}
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
                <Typography >
                    <Link>
                    Already on Hiring Mine
                    </Link>
                    ? Login</Typography>
                </Paper>
            </Box>

        </Box>
    );
}

export default Signup