import React from 'react'
import useFetch from '../../hooks/useFetch'
import { Box, Typography } from '@mui/material'
import CategoriesCard from '../card/CategoriesCard'

function CategoriesSection() {

    const { data, loading, error } = useFetch('https://hiringmine-railway-development.up.railway.app/api/categories/all')
    console.log(data);

    return (
        <>
            <Typography variant='h1' fontSize={60} fontWeight='bold' textAlign='center'>
                <span style={{ color: '#6851ff' }}>Countless Career Options</span> Are Waiting For You To Explore
            </Typography>
            <Box width={'90%'} margin={'auto'} sx={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>

                {data && data.data?.slice(0,8).map((details) => (

                    <CategoriesCard {...details} />
                ))}


            </Box>
        </>
    )
}

export default CategoriesSection