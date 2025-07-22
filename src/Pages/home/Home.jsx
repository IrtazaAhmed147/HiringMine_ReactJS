import { Box, Button, Card, Typography } from '@mui/material'
import './home.css'
import SearchBar from '../../Components/searchbar/SearchBar'
import { Link } from 'react-router-dom'
import banner from '../../assets/banner.webp'
import frame1 from '../../assets/frame1.png'
import frame2 from '../../assets/frame2.png'
import Footer from '../../Components/footer/Footer'
import Navbar from '../../Components/navbar/Navbar'
import HJobSection from '../../Components/h-jobsection/HJobSection'
import QuickStepsSection from '../../Components/quickStepsSection/QuickStepsSection'
import ProfileSection from '../../Components/profileSection/ProfileSection'
import CategoriesSection from '../../Components/categoriesSection/CategoriesSection'

import poster from '../../assets/large img.png'
import { useSelector } from 'react-redux'
import WolCard from '../../Components/card/WolCard'

function Home() {



    const buttons = [
        "Software", "Developer", "Backend", "React", "Node",
        "React Native", "Flutter", "UI/UX", "Designer",
        "Web", "SEO", "Marketing", "Writer"

    ]



    const { theme } = useSelector((state) => state.theme)

    return (
        <>
            <Navbar />
            <Box sx={{ backgroundImage: theme === 'dark' ? 'linear-gradient(rgb(33, 33, 38) 0%, rgb(33, 33, 38) 69.79%, rgb(33, 33, 38) 99.99%, rgb(33, 33, 38) 100%)' : 'white' }}>


                <Box sx={{
                    width: {xs:"90%", sm: '80%',md: '70%'},
                    margin: "auto",


                }}
                    className='homeContainer'>
                    <Typography sx={{fontSize:{xs: '40px', sm:'70px'}}}  className='heading' marginTop={"40px"} variant="h1">Dig. Apply Prepare Your Future</Typography>
                    <Typography fontSize={17} sx={{ color: theme === 'dark' ? 'white' : 'black' }} textAlign='center' component="p">Hiring Mine connects employer and job seekers, where employers are the source of the resources and the job seeker can find and apply for their targeted job.</Typography>
                    <SearchBar theme={theme}/>

                    <button className='findJobBtn'>
                        <Link to={'/'}>
                            Find Jobs
                        </Link>
                    </button>
                    <Typography variant='h1' fontSize={40} className='popularSearches-h'>Popular Searches</Typography>
                    <Box sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {buttons.map((btn,i) => (
                            <Button key={i} variant="outlined" width='200px'>{btn}</Button>
                        ))}
                    </Box>
                </Box>

                <Box width={"100%"} sx={{display: {sm : 'none',md: 'block', xs:'none'}}} component={'img'} src={poster} />


                <HJobSection />

                <Typography sx={{ color: theme === 'dark' ? 'white' : 'black' }} marginTop={'30px'} marginBottom={'30px'} variant='h1' fontSize={60} fontWeight='bold' textAlign='center'>
                    <span style={{ color: '#6851ff' }}>The Wall </span>
                    of Love</Typography>

                <Box width={{sm:'90%', md:'90%', xs: '90%'}} margin={'auto'} sx={{ display: 'flex', gap: '10px',flexWrap:'wrap',justifyContent: 'center' }}>



                    <WolCard />
                    <WolCard />
                    <WolCard />


                </Box>

                <QuickStepsSection theme={theme}/>


                <Typography variant='h1' fontWeight='bold' sx={{ color: theme === 'dark' ? 'white' : 'black',margin:'30px 10px 0px 10px' }} textAlign='center' fontSize={60}>
                    Find Your Dream Job
                    <span style={{ color: '#6851ff' }}> Super Fast Ever.</span>
                </Typography>
                <Typography sx={{ color: theme === 'dark' ? 'white' : 'black' }} marginBottom={'30px'} component={'p'} fontSize={25} textAlign={'center'}>We are here to help jobseekers connect with organizer and companies. We are provides the best opportunities to professional people.</Typography>
                <Box width={"80%"} margin={'auto'}>

                    <Box width={"100%"} component={'img'} src={banner} />
                </Box>

                <ProfileSection />
                <CategoriesSection />


                <Box sx={{ display: {xs: 'none',sm: 'none' ,md: 'flex'}, gap: '15px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginTop: '70px', paddingBottom: '70px' }}>
                    <Box width={'48%'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Box component={'img'} src={frame1} width={'80%'} />
                        <Typography sx={{ color: theme === 'dark' ? 'white' : 'black' }} variant='h1' fontWeight='bold' fontSize={'50px'} width={'80%'} >
                            Connect With People
                            <span style={{ color: '#6851ff' }}> Who Can Help</span>
                        </Typography>
                    </Box>
                    <Box width={'2.6px'} height={'140px'} sx={{ backgroundColor: 'rgb(104, 81, 255)' }} />
                    <Box width={'48%'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Box component={'img'} src={frame2} width={'80%'} />
                        <Typography sx={{ color: theme === 'dark' ? 'white' : 'black' }} variant='h1' fontWeight='bold' fontSize={'50px'} width={'80%'} >
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