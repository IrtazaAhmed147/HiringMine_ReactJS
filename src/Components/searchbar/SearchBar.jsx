import { Box, Button, IconButton, InputAdornment, inputBaseClasses, TextField } from '@mui/material'
import React from 'react'
import searchIcon from '../../assets/form img.png'

function SearchBar() {
    return (
        <Box
            component="form"
            sx={{ display: 'flex', justifyContent: "center", width: "100%" }}
        >

            <TextField
                id="outlined-suffix-shrink"
                label="Search By Role or Keyword"
                variant="outlined"
                sx={{
                    width: '473px',
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderRight: 'none',
                            borderColor: 'gray',
                            borderRadius: '5px 0px 0px 5px'
                        },
                    },
                }}

            />
            <Button variant="outlined" sx={{ borderColor: 'gray', borderLeft: 'none', borderRadius: '0px 5px 5px 0px' }}>
                <Box component="img" src={searchIcon} />
            </Button>
        </Box>
    )
}

export default SearchBar