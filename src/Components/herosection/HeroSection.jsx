import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import SearchBar from '../searchbar/SearchBar'
import { Link } from 'react-router-dom'

import poster from '../../assets/large img.png'

function HeroSection() {

    const buttons = [
        "Software", "Developer", "Backend", "React", "Node",
        "React Native", "Flutter", "UI/UX", "Designer",
        "Web", "SEO", "Marketing", "Writer"

    ]

    return (
        <>
            <Box sx={{
                width: "60%",
                margin: "auto",


            }}
                className='homeContainer'>
                <Typography className='heading' marginTop={"40px"} variant="h1">Dig. Apply Prepare Your Future</Typography>
                <Typography fontSize={17} textAlign='center' component="p">Hiring Mine connects employer and job seekers, where employers are the source of the resources and the job seeker can find and apply for their targeted job.</Typography>
                <SearchBar />

                <button className='findJobBtn'>
                    <Link to={'/'}>
                        Find Jobs
                    </Link>
                </button>
                <Typography variant='h1' fontSize={40} className='popularSearches-h'>Popular Searches</Typography>
                <Box sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {buttons.map((btn) => (
                        <Button variant="outlined" width='200px'>{btn}</Button>
                    ))}
                </Box>
            </Box>

            <Box width={"100%"} component={'img'} src={poster} />
        </>

    )
}

export default HeroSection