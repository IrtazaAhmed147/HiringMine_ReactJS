import { Box, Button, Card, Typography } from '@mui/material'
import React from 'react'
import './home.css'
import SearchBar from '../../Components/searchbar/SearchBar'
import { Link } from 'react-router-dom'
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
import useFetch from '../../hooks/useFetch'
import HeroSection from '../../Components/herosection/HeroSection'
import HJobSection from '../../Components/h-jobsection/HJobSection'
import QuickStepsSection from '../../Components/quickStepsSection/QuickStepsSection'
import ProfileSection from '../../Components/profileSection/ProfileSection'
import CategoriesSection from '../../Components/categoriesSection/CategoriesSection'

function Home() {





  

    return (
        <>
            <Navbar />
            <Box>
                {/* hero section */}
                <HeroSection />
                <HJobSection jobs={true} pheading={'Latest And Top'} sHeading={'Job Openings'} />
                <HJobSection jobs={false} pheading={'The Wall'} sHeading={'of Love'} />

                <QuickStepsSection />


                <Typography variant='h1' fontWeight='bold' textAlign='center' fontSize={60}>
                    Find Your Dream Job
                    <span style={{ color: '#6851ff' }}> Super Fast Ever.</span>
                </Typography>
                <Typography component={'p'} fontSize={25} textAlign={'center'}>We are here to help jobseekers connect with organizer and companies. We are provides the best opportunities to professional people.</Typography>
                <Box width={"80%"} margin={'auto'}>

                    <Box width={"100%"} component={'img'} src={banner} />
                </Box>

                <ProfileSection />
                <CategoriesSection />


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