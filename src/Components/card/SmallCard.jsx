import React from 'react'
import './smallcard.css'
import icon from '../../assets/icon.png'
import { Box } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function SmallCard({ userName,
  firstName,
  lastName,
  profilePic,
  jobTitle }) {
  return (

    <>
      <div className='highProfileBox '>

        <div className="highProfileImage">
          <img  src={profilePic} alt="" />
        </div>
        <div>
          <p className="small" style={{
            color: '#4d3bdb'
          }}>{firstName}</p>
          <p className="small" style={{
            color: 'gray'
          }}>{lastName}</p>
          <p className="small" href="#" style={{
            color: 'gray !important'
          }}>View Profile <ArrowRightAltIcon /></p>
        </div>

        <Box height='30px' className="highProfileImage" >
          {/* <img src="./assets/icon.png" alt="" /> */}
          <img src={icon} alt="" />

        </Box>
      </div>


    </>
  )
}

export default SmallCard