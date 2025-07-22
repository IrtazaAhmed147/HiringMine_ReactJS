import { Box, Typography } from '@mui/material'
import React from 'react'
import SliderComponent from '../slider/SliderComponent'
// import WolSlider from '../slider/ProfileSlider'
import { useSelector } from 'react-redux'
import WolCard from '../card/WolCard'

function HJobSection() {
  const { theme } = useSelector((state) => state.theme)
  return (
    <>
      <Typography sx={{ color: theme === 'dark' ? 'white' : 'black',margin:'30px 10px' }} variant='h1' fontSize={60} fontWeight='bold' textAlign='center'>
        <span style={{ color: '#6851ff' }}>Latest And Top </span>
        Job Openings</Typography>

      <Box width={'80%'} margin={'auto'}>
        <SliderComponent />


      </Box>
    </>
  )
}

export default HJobSection