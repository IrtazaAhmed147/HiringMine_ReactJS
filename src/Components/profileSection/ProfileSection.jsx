import { Box, Typography } from '@mui/material'
import React from 'react'
import SmallCard from '../card/SmallCard'
import useFetch from '../../hooks/useFetch'

function ProfileSection() {

      const { data, loading, error } = useFetch('https://hiringmine-railway-development.up.railway.app/api/users/home?sortBy=mostViewed')

    return (
        <>

            <Typography variant='h1' fontWeight='bold' fontSize={60} textAlign='center'>
                <span style={{ color: '#6851ff' }}> Our Top</span> Profiles
            </Typography>
            <Typography component={'p'} fontSize={25} textAlign={'center'}>Explore a curated selection of the most talented and skilled professionals from diverse industries. We connect top-tier individuals with companies seeking exceptional expertise to achieve their goals.</Typography>
            <Box sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>

                {data && data.data?.map((detail) => (
                    <SmallCard userName={detail.userName} firstName={detail.firstName} lastName={detail.lastName} profilePic={detail.profilePic} jobTitle={detail.jobTitle} />
                ))}

            </Box>

        </>
    )
}

export default ProfileSection