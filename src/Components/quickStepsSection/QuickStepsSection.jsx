import { Box, Typography } from '@mui/material'
import React from 'react'
import QuickAccessCard from '../card/QuickAccessCard'

function QuickStepsSection() {


    
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
        </>
    )
}

export default QuickStepsSection