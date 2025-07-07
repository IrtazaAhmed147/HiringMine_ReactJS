import { Box, Button, Card, Typography } from '@mui/material'
import React from 'react'
import './home.css'
import SearchBar from '../../Components/searchbar/SearchBar'
import { Link } from 'react-router-dom'
import poster from '../../assets/large img.png'
import banner from '../../assets/banner.webp'
import SliderComponent from '../../Components/slider/SliderComponent'
import CardComponent from '../../Components/card/CardComponent'
import SmallCard from '../../Components/card/SmallCard'
import JobCard from '../../Components/card/JobCard'

function Home() {

    const buttons = [
        "Software", "Developer", "Backend", "React", "Node",
        "React Native", "Flutter", "UI/UX", "Designer",
        "Web", "SEO", "Marketing", "Writer"

    ]

    return (
        <Box>
            <Box sx={{
                width: "60%",
                margin: "auto",
                height: "700px",

            }}
                className='homeContainer'>
                <Typography className='heading' variant="h1">Dig. Apply Prepare Your Future</Typography>
                <Typography fontSize={25} textAlign='center' component="p">Hiring Mine connects employer and job seekers, where employers are the source of the resources and the job seeker can find and apply for their targeted job.</Typography>
                <SearchBar />

                <button className='findJobBtn'>
                    <Link to={'/'}>
                        Find Jobs
                    </Link>
                </button>
                <Typography variant='h1' className='popularSearches-h'>Popular Searches</Typography>
                <Box sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {buttons.map((btn) => (
                        <Button variant="outlined" width='200px'>{btn}</Button>
                    ))}
                </Box>
            </Box>

            <Box width={"100%"} component={'img'} src={poster} />
            <Typography variant='h1' fontWeight='bold' textAlign='center'>
                <span style={{ color: '#6851ff' }}> Latest And Top </span>
                Job Openings</Typography>

            <Box width={'80%'} margin={'auto'}>
                <SliderComponent />
            </Box>
            <Typography variant='h1' fontWeight='bold' textAlign='center'>
                <span style={{ color: '#6851ff' }}> The Wall </span>
                of Love</Typography>
            <Box width={'80%'} margin={'auto'}>
                <SliderComponent wallOfLove={true} />
            </Box>

            <Typography variant='h1' fontWeight='bold' textAlign='center'>
                Get Hired In 4
                <span style={{ color: '#6851ff' }}> Quick Easy Steps</span>
            </Typography>
            <Typography component={'p'} fontSize={25} textAlign={'center'}>The quickest and the most effective way to get hired by the top firm.</Typography>
            <Box width={'100%'} sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>

                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />

            </Box>

            <Typography variant='h1' fontWeight='bold' textAlign='center'>
                Find Your Dream Job
                <span style={{ color: '#6851ff' }}> Super Fast Ever.</span>
            </Typography>
            <Typography component={'p'} fontSize={25} textAlign={'center'}>We are here to help jobseekers connect with organizer and companies. We are provides the best opportunities to professional people.</Typography>
            <Box width={"80%"} margin={'auto'}>

                <Box width={"100%"} component={'img'} src={banner} />
            </Box>

            <Typography variant='h1' fontWeight='bold' textAlign='center'>
                <span style={{ color: '#6851ff' }}> Our Top</span> Profiles
            </Typography>
            <Typography component={'p'} fontSize={25} textAlign={'center'}>Explore a curated selection of the most talented and skilled professionals from diverse industries. We connect top-tier individuals with companies seeking exceptional expertise to achieve their goals.</Typography>
            <Box sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>

                <SmallCard />
                <SmallCard />
                <SmallCard />
                <SmallCard />
                <SmallCard />
            </Box>

            <Typography variant='h1' fontWeight='bold' textAlign='center'>
                <span style={{ color: '#6851ff' }}>Countless Career Options</span> Are Waiting For You To Explore
            </Typography>
            <Box width={'90%'} margin={'auto'} sx={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>

                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
            </Box>
        </Box>
    )
}

export default Home