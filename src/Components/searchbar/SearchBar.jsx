import { Box, Button, IconButton, InputAdornment, inputBaseClasses, TextField } from '@mui/material'
import React from 'react'
import searchIcon from '../../assets/form img.png'
import '../../Pages/home/home.css'

function SearchBar({theme}) {
    return (
        <Box
            
            sx={{ display: 'flex', justifyContent: "center", width: "100%" }}
        >
               <form onSubmit={(e)=> e.preventDefault()}>
                    <input className={"search-res search"}  style={{color: theme === 'dark' ? 'white': 'black', borderColor: theme === 'dark' ? 'gray': 'black'}}  type="search" placeholder="Search by Role or Keyword" required />
                    <button className='submit' style={{borderColor: theme === 'dark' ? 'gray': 'black'}}>
                        <img src={searchIcon} alt="" />
                    </button>
                </form>
        </Box>
    )
}

export default SearchBar