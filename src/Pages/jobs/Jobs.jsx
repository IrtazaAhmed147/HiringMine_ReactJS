import {
    Box, TextField, InputAdornment, IconButton, Button, MenuItem
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logo from '../../assets/logo.png'
import CardComponent from '../../Components/card/CardComponent';


const filters = [
    'Category', 'Date Posted', 'Job Type', 'Seniority Level', 'On-Site/Remote', 'Salary Range', 'Experience'
];


const Jobs = () => {
    return (
        <Box sx={{ px: 4, py: 2, bgcolor: '#fdfcff' }}>
            {/* Top Header */}
            <Box display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap" gap={2}>
                <Box component={'img'} src={logo} />

                <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Search Job titles or companies"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Button size="small" endIcon={<ArrowDropDownIcon />}>Jobs</Button>
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    sx={{ flexGrow: 1, maxWidth: 500 }}
                />

                {/* <Box component="img" src="/dark-toggle-icon.png" alt="theme toggle" sx={{ width: 30 }} /> */}

            </Box>

            {/* Filters */}
            <Box mt={2} display="flex" flexWrap="wrap" gap={2}>
                {filters.map((filter) => (
                    <TextField
                        key={filter}
                        select
                        label={filter}
                        value=""
                        size="small"
                        sx={{ minWidth: 150 }}
                    >
                        <MenuItem value="">Select {filter}</MenuItem>
                    </TextField>
                ))}
            </Box>

            {/* Job Cards */}
            <Box display={'flex'} gap={3} justifyContent={'center'} flexWrap={'wrap'} marginTop={5}>

                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />

            </Box>
        </Box>
    );
};

export default Jobs;
