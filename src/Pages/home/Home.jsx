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
import frame1 from '../../assets/frame1.png'
import frame2 from '../../assets/frame2.png'
import Footer from '../../Components/footer/Footer'
import Navbar from '../../Components/navbar/Navbar'
import CategoriesCard from '../../Components/card/CategoriesCard'
import WolSlider from '../../Components/slider/WolSlider'
import QuickAccessCard from '../../Components/card/QuickAccessCard'

function Home() {

    const buttons = [
        "Software", "Developer", "Backend", "React", "Node",
        "React Native", "Flutter", "UI/UX", "Designer",
        "Web", "SEO", "Marketing", "Writer"

    ]

    const cardData = [
        {
            icon: "PersonAddAltIcon", // from @mui/icons-material
            name: "Create an Account",
            description: "Join our vibrant community. Create your account and unlock boundless opportunities."
        },
        {
            icon: "SearchIcon", // from @mui/icons-material
            name: "Search a Job",
            description: "Discover your ideal job. Our intuitive search feature makes job hunting effortless."
        },
        {
            icon: "UploadFileIcon", // from @mui/icons-material
            name: "Upload CV/Resume",
            description: "Showcase your expertise. Upload your CV or resume and stand out to employers."
        },
        {
            icon: "WorkOutlineIcon", // from @mui/icons-material
            name: "Get a Job",
            description: "Achieve your career goals. Apply for jobs and embark on your next adventure."
        }
    ];


    return (
        <>
            <Navbar />
            <Box>
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
                <Typography variant='h1' fontSize={60} fontWeight='bold' textAlign='center'>
                    <span style={{ color: '#6851ff' }}> Latest And Top </span>
                    Job Openings</Typography>

                <Box width={'80%'} margin={'auto'}>
                    <SliderComponent />
                </Box>
                <Typography variant='h1' fontSize={60} fontWeight='bold' textAlign='center'>
                    <span style={{ color: '#6851ff' }}> The Wall </span>
                    of Love</Typography>
                <Box width={'80%'} margin={'auto'}>
                    <WolSlider />
                </Box>

                <Typography variant='h1' fontSize={60} fontWeight='bold' textAlign='center'>
                    Get Hired In 4
                    <span style={{ color: '#6851ff' }}> Quick Easy Steps</span>
                </Typography>
                <Typography component={'p'} fontSize={25} textAlign={'center'}>The quickest and the most effective way to get hired by the top firm.</Typography>
                <Box width={'100%'} sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {cardData.map((data, i) => (

                        <QuickAccessCard key={i} name={data.name} icon={data.icon} description={data.description} />
                    ))}


                </Box>

                <Typography variant='h1' fontWeight='bold' textAlign='center' fontSize={60}>
                    Find Your Dream Job
                    <span style={{ color: '#6851ff' }}> Super Fast Ever.</span>
                </Typography>
                <Typography component={'p'} fontSize={25} textAlign={'center'}>We are here to help jobseekers connect with organizer and companies. We are provides the best opportunities to professional people.</Typography>
                <Box width={"80%"} margin={'auto'}>

                    <Box width={"100%"} component={'img'} src={banner} />
                </Box>

                <Typography variant='h1' fontWeight='bold' fontSize={60} textAlign='center'>
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

                <Typography variant='h1' fontSize={60} fontWeight='bold' textAlign='center'>
                    <span style={{ color: '#6851ff' }}>Countless Career Options</span> Are Waiting For You To Explore
                </Typography>
                <Box width={'90%'} margin={'auto'} sx={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>

                    <CategoriesCard />
                    <CategoriesCard />
                    <CategoriesCard />
                    <CategoriesCard />

                </Box>

                <Box sx={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginTop: '70px' }}>
                    <Box width={'48%'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Box component={'img'} src={frame1} width={'80%'} />
                        <Typography variant='h1' fontWeight='bold' fontSize={'50px'} width={'80%'} >
                            Connect With People
                            <span style={{ color: '#6851ff' }}> Who Can Help</span>
                        </Typography>
                    </Box>
                    <Box width={'2.6px'} height={'140px'} sx={{ backgroundColor: 'rgb(104, 81, 255)' }} />
                    <Box width={'48%'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Box component={'img'} src={frame2} width={'80%'} />
                        <Typography variant='h1' fontWeight='bold' fontSize={'50px'} width={'80%'} >
                            <span style={{ color: '#6851ff' }}>Post Your Job</span> For People To See
                        </Typography>

                    </Box>

                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default Home