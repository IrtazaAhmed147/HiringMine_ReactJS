import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from "../../assets/logo.png"
import './navbar.css'
import { Link } from 'react-router-dom';
import SwitchCom from '../switch/SwitchCom.jsx';
import { useSelector } from 'react-redux';

const pages = [
    { name: 'About Us', url: '/about-us' },
    { name: 'People', url: '/people' },
    { name: 'Resume Builder', url: '/resume-builder' },
    { name: 'Resume Checker', url: '/resume-checker' },
    { name: 'Jobs', url: '/jobs' },
    { name: 'Login', url: '/login' },
    { name: 'Join Now', url: '/signup' },
    { name: 'Employee/Post Job', url: '/employee-post-job' }
];
// 'About Us', 'People', 'Resume Builder', 'Resume Checker', 'Jobs', 'Login', 'Join Now', 'Employee/Post Job'
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {

    const { theme } = useSelector((state) => state.theme)
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{
            backgroundImage:
                theme === 'dark' && 'linear-gradient(rgb(33, 33, 38) 0%, rgb(33, 33, 38) 69.79%, rgb(33, 33, 38) 99.99%, rgb(33, 33, 38) 100%)',
            backgroundColor: theme === 'light' && 'white',
            color: theme === 'dark' ? 'white' : 'black',
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Link to={'/'}>
                        <Box
                            component="img"
                            src={logo}
                            alt="Example"
                            sx={{
                                width: '146px',
                                height: '30px',
                                display: { xs: 'none', md: 'flex' }
                            }}
                        />
                    </Link>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' }, padding: '0px'  }}
                            
                        >
                            {pages.map((page,i) => (
                                <MenuItem key={i} onClick={handleCloseNavMenu} sx={{backgroundColor: theme === 'dark' ? 'rgb(41, 41, 48)' : 'white'}}>
                                    <Typography
                                        component={Link}
                                        to={page.url} sx={{ textAlign: 'center', color:  theme === 'dark' ? 'white' : 'black', textDecoration: 'none' }}>{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
 
                    {/* window */}
                    <Link to={'/'}>
                        <Box
                            component="img"
                            src={logo}
                            alt="Example"
                            sx={{
                                width: '146px',
                                height: '30px',
                                display: { xs: 'flex', md: 'none' }
                            }}
                        />
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {pages.map((page) => (

                            <Button
                                key={page.name}
                                component={Link}
                                to={page.url}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2,fontSize: {lg:'16px'},minWidth: 'auto',padding: '2px 8px',textTransform: 'none', color:  theme === 'dark' ? 'white' : 'black', display: 'block' }}
                            >
                                {page.name}
                            </Button>

                        ))}
                    </Box>

                    <SwitchCom />

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px', backgroundColor: 'blue' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar