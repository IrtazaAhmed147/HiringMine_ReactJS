import { Box, Typography } from '@mui/material'
import React from 'react'
import SmallCard from '../card/SmallCard'
import { useSelector } from 'react-redux'
import ProfileSlider from '../slider/ProfileSlider.jsx'

function ProfileSection() {

    const { theme } = useSelector((state) => state.theme)
    
    return (
        <>

            <Typography sx={{ color: theme === 'dark' ? 'white' : 'black',margin:'30px 10px 0px 10px' }} variant='h1' fontWeight='bold' fontSize={60} textAlign='center'>
                <span style={{ color: '#6851ff' }}> Our Top</span> Profiles
            </Typography>
            <Typography sx={{ color: theme === 'dark' ? 'white' : 'black' }} marginBottom={'30px'} component={'p'} fontSize={25} textAlign={'center'}>Explore a curated selection of the most talented and skilled professionals from diverse industries. We connect top-tier individuals with companies seeking exceptional expertise to achieve their goals.</Typography>
            <Box sx={{ width: '85%', margin: 'auto' }}>

                <ProfileSlider />
            </Box>

        </>
    )
}

export default ProfileSection