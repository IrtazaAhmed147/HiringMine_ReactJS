
import { Box, Typography } from '@mui/material'
import CategoriesCard from '../card/CategoriesCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../../redux/profilesSlice';
import { useEffect } from 'react';

function CategoriesSection() {

    const dispatch = useDispatch()
    const { categories, isLoading } = useSelector((state) => state.profile);

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);
    const { theme } = useSelector((state) => state.theme)
    return (
        <>
            <Typography sx={{ color: theme === 'dark' ? 'white' : 'black', margin:'30px 10px' }}  variant='h1' fontSize={60} fontWeight='bold' textAlign='center'>
                <span style={{ color: '#6851ff' }}>Countless Career Options</span> Are Waiting For You To Explore
            </Typography>
            <Box width={'90%'} margin={'auto'} sx={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>

                <Box component={'ul'} sx={{ display: 'flex',justifyContent: 'center', flexWrap: 'wrap', gap: '10px', width: '100%' }} margin={'auto'} marginBottom={'50px'}>

                    {!isLoading && categories?.slice(0, 8).map((details, i) => (

                        <CategoriesCard key={i} {...details} theme={theme} />
                    ))}

                </Box>

            </Box>
        </>
    )
}

export default CategoriesSection