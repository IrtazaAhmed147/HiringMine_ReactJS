import { Box} from '@mui/material';
import Slider from 'react-slick';
import styles from '../../Pages/jobs/jobs.module.css'

function JobCategoriesSlider({ filters }) {

    

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function (index) {},
         responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                 centerPadding: "10px",
                }
              },
              {
                breakpoint: 650,
                settings: {
                   slidesToShow: 3,
                 centerPadding: "10px",
                }
              },
              {
                breakpoint: 480,
                settings: {
                   slidesToShow: 1,
                 centerPadding: "10px",
                }
              }
            ]
    };
    return (
        <>
            <Box sx={{width: {xs: '98%',sm: '82%', md: '70%'}, margin: 'auto'}} className={styles['slider-container']} >
                <Slider {...settings}>
                    {filters.map((filter, i) => (

                        <div key={i}>
                           
                            <select key={i} style={{backgroundColor: '#6851ff', border: 'none', borderRadius: '5px', padding: '10px', margin: '0px 10px', outline: 'none', color: 'white'}}>
                            {filter.options.map((value,i)=> (
                                <option key={i} value={value}>{value}</option>
                            ))}
                            </select>
                        </div>

                    ))}
                    
                </Slider>
            </Box>
        </>
    )
}

export default JobCategoriesSlider