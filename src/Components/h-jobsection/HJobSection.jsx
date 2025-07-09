import { Box, Typography } from '@mui/material'
import React from 'react'
import SliderComponent from '../slider/SliderComponent'
import WolSlider from '../slider/WolSlider'

function HJobSection({jobs, pheading, sHeading}) {
  return (
    <>
    <Typography variant='h1' fontSize={60} fontWeight='bold' textAlign='center'>
                    <span style={{ color: '#6851ff' }}>{pheading} </span>
                    {sHeading}</Typography>

                <Box width={'80%'} margin={'auto'}>
                    {jobs ? <SliderComponent /> :  <WolSlider />}
                    
                </Box>
    </>
  )
}

export default HJobSection