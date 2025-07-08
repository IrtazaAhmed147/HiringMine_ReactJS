import React from 'react'
import './footer.css'
import hiringMineImage from  '../../assets/footer logo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
  return (
     <footer>
        <div className="foot">
            <div className="footupper">
                <div className="footupperbox">
                    <div className="social">
                        <div>

                            <img src={hiringMineImage} height="33px" alt="" />
                            <p>HiringMine connects employer and job seekers, where employers are the source of the
                                resources and the job seeker can find and apply for their targeted job.</p>
                        </div>

                        <div className="footimages">
                            <h2>Follow us</h2>
                            <div className="d-flex gap-4">

                           
                                   <FacebookIcon /> 
                           
                           
                                   <WhatsAppIcon /> 
                           
                           
                                   <InstagramIcon /> 
                           
                           
                                   <LinkedInIcon /> 
                           
                              
                            </div>



                        </div>

                    </div>
                    <div className="contact">
                        <div className="contactbox mb-4">
                            <h3>Contact Us</h3>
                            <p>
                                <i className="fa fa-envelope"></i>
                                <a href="#">portal.hiringmine@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="footlower">
                <div>

                    <div className="policy">
                        <p><a href="#">Privacy Policy</a></p>
                        <p><a href="#">Terms and Condition</a></p>

                    </div>
                    <div className="copyyright">
                        Copyright Hiringmine 2024. All Rights Reserved
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer