import React from 'react'
import './smallcard.css'
import icon from '../../assets/icon.png'
import { Box } from '@mui/material'

function SmallCard() {
  return (
   
   <>
   <div className='highProfileBox '>

      <div className="highProfileImage">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" alt="" />
                </div>
                <div>
                    <p className="small" style={{
                      color: '#4d3bdb'
                    }}>asdf</p>
                    <p className="small" style={{
                      color: 'gray'
                    }}>dsaf</p>
                    <p className="small" href="#" style={{
                      color: 'gray !important'
                    }}>asdf &rightarrow;</p>
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