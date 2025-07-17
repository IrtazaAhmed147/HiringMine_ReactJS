import React, { useRef, useState } from 'react';
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
import axios from 'axios';
import SwitchCom from '../../Components/switch/SwitchCom';
import { useSelector } from 'react-redux';


function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const inputRefs = useRef({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    // https://hiringmine-railway-development.up.railway.app/api/auth/signup

    const handleClick = async () => {
        console.log(inputRefs.current.email);
        console.log(inputRefs.current.password);

        try {
            const response = await axios.post('https://hiringmine-railway-development.up.railway.app/api/auth/signup', {

                userName: inputRefs.current.userName,
                firstName: inputRefs.current.firstName,
                lastName: inputRefs.current.lastName,
                email: inputRefs.current.email,
                password: inputRefs.current.password,
                cPassword: inputRefs.current.confirmPassword,
            })
            console.log(response);

        } catch (error) {
            console.log(error);

        }

    }

  const { theme } = useSelector((state) => state.theme)

    return (
        <Box
            sx={{
                minHeight: '100vh',
                        backgroundColor: theme === 'dark' ? 'rgb(41, 41, 48)' : 'white',

                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                flexDirection: 'column',
                width: '100%'
            }}
        >

            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '90%', margin: '20px' }}>


                <Link to={'/'}>
                    <Box component={'img'} src={logo} width={'146px'} />
                </Link>

                <SwitchCom />

            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    marginTop: '50px'
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
                          backgroundColor: theme === 'dark' ? 'rgb(37, 37 ,42)' : 'white',
                    }}
                >
                    <Typography variant="h5" fontWeight="bold" gutterBottom color={theme === 'dark' ? 'white': 'black'}>
                        LET'S GET STARTED
                    </Typography>
                    <Typography color={theme === 'dark' ? 'white': 'black'} variant="body2" mb={3}>
                        Create an account to get recommended jobs that match your resume and apply to multiple jobs in seconds!
                    </Typography>

                    <TextField label="User Name" fullWidth margin="normal" variant="outlined" onChange={(e) => inputRefs.current.userName = e.target.value} />
                    <TextField label="First Name" fullWidth margin="normal" variant="outlined" onChange={(e) => inputRefs.current.firstName = e.target.value} />
                    <TextField label="last Name" fullWidth margin="normal" variant="outlined" onChange={(e) => inputRefs.current.lastName = e.target.value} />
                    <TextField label="Enter Email Address" fullWidth margin="normal" variant="outlined" onChange={(e) => inputRefs.current.email = e.target.value} />

                    <TextField onChange={(e) => inputRefs.current.password = e.target.value}
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
                        onChange={(e) => inputRefs.current.confirmPassword = e.target.value}
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

                    <Typography color={theme === 'dark' ? 'white': 'black'} variant="caption" display="block" mt={2} mb={2}>
                        By clicking Agree & Join, you agree to the Hiring Mine User Agreement, Privacy Policy, and Cookie Policy.
                    </Typography>

                    <Button
                        onClick={handleClick}
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

                    <Divider sx={{ my: 3,color: theme ==='dark'&& 'white' }}>or</Divider>

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
                    <Typography color={theme === 'dark' ? 'white': 'black'}>
                        Already on Hiring Mine ?
                        <Link to={'/login'}>
                            Login
                        </Link>
                    </Typography>
                </Paper>
            </Box>

        </Box>
    );
}

export default Signup