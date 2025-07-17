import React from 'react'
import useFetch from '../../hooks/useFetch'
import { Box, Typography } from '@mui/material'
import CategoriesCard from '../card/CategoriesCard'
import { useSelector } from 'react-redux'

function CategoriesSection() {

    const { data, loading, error } = useFetch('https://hiringmine-railway-development.up.railway.app/api/categories/all')
  

    const { theme } = useSelector((state) => state.theme)
    return (
        <>
            <Typography sx={{color: theme === 'dark'? 'white':'black'}}  marginBottom={'30px'}  marginTop={'30px'} variant='h1' fontSize={60} fontWeight='bold' textAlign='center'>
                <span style={{ color: '#6851ff' }}>Countless Career Options</span> Are Waiting For You To Explore
            </Typography>
            <Box width={'90%'} margin={'auto'} sx={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>

            <Box component={'ul'} sx={{display:'flex', flexWrap: 'wrap', gap: '10px', width: '95%'}} margin={'auto'} marginBottom={'50px'}>

                {data && data.data?.slice(0,8).map((details,i) => (
                    
                    <CategoriesCard key={i} {...details} theme={theme} />
                ))}

                </Box>

            </Box>
        </>
    )
}

export default CategoriesSection