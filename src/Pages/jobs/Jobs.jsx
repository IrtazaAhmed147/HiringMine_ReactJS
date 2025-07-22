import {
    Box, TextField, InputAdornment, IconButton, Button, MenuItem,
    CircularProgress,
    FormControl,
    InputLabel,
    Select
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logo from '../../assets/logo.png'
import CardComponent from '../../Components/card/CardComponent';
import { useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import SwitchCom from '../../Components/switch/SwitchCom.jsx';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { fetchJobs } from '../../redux/jobsSlice.js';
import JobCategoriesSlider from '../../Components/slider/jobCategoriesSlider.jsx';
import styles from './jobs.module.css'

const filters = [
    {
        name: 'Category',
        options: ['Development', 'Marketing & Sales', 'Art & Illustration',],

    },
    {
        name: 'Date Posted',
        options: ["Anytime", "1 months", 'Last 7 days', 'Past 24 hours'],

    },
    {
        name: 'Job Type',
        options: ['Full-Time', 'Part-Time', 'Contract'],

    },
    {
        name: 'Seniority Level',
        options: ['Mid-level', 'Senior-level', 'Associate', 'Internship', 'Fresher'],

    },
    {
        name: 'On-Site/Remote',
        options: ['Onsite', 'Remote', 'Hybrid'],

    },
    {
        name: 'Salary Range',
        options: [
            "0 - 20,000 PKR",
            "20,000 - 50,000 PKR",
            "50,000 - 100,000 PKR",
            "100,000 - 200,000 PKR",
            "200,000 - 300,000 PKR",
            "300,000 - 500,000 PKR",
            "500,000+ PKR"
        ],

    },
    {
        name: 'Experience',
        options: [
            "0 - 1 years",
            "1 - 2 years",
            "2 - 3 years",
            "3 - 4 years",
            "4 - 5 years",
            "5 - 8 years",
            "8 - 10 years",
            "10+ years"
        ],

    },

];


const Jobs = () => {

    const searchValue = useRef('')

    const dispatch = useDispatch();
    const { allJobs, hasMore, isLoading } = useSelector((state) => state.jobs);
    const { theme } = useSelector((state) => state.theme)


    useEffect(() => {
        dispatch(fetchJobs());
    }, []);

    const handleClick = () => {
        dispatch(fetchJobs(searchValue.current, true)); // reset = true
    };

    const fetchMoreData = () => {
        dispatch(fetchJobs(searchValue.current));
    };

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    return (
        <Box sx={{ px: 4, py: 2, backgroundImage: theme === 'dark' && 'linear-gradient(rgb(33, 33, 38) 0%, rgb(33, 33, 38) 69.79%, rgb(33, 33, 38) 99.99%, rgb(33, 33, 38) 100%)', minHeight: '100vh' }}>
            {/* Top Header */}
            <Box display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap" gap={2}>
                <Link to={'/'}>
                    <Box  sx={{width: {sm:'200px', xs: '150px'}}} component={'img'} src={logo} />
                </Link>

                <Box sx={{ display: {md: 'flex', sm:'none', xs: 'none'}, gap: '20px' }}>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <input
                            className={styles.searchInput}
                            onChange={(e) => searchValue.current = e.target.value}
                            type='search'
                            placeholder="Search Job titles or companies"

                            style={{ background: theme === 'dark' ? 'rgb(41, 41, 48)' : 'white', color: theme === 'dark' ? 'white' : "black", borderColor: theme === 'dark' ? 'white' : 'gray' }}
                        />
                        <Button sx={{ border: '1px solid gray', borderLeft: 'none', borderRadius: '0px', borderColor: theme === 'dark' ? 'white' : 'gray' }} variant='outlined' onClick={handleClick}>
                            <SearchIcon />
                        </Button>
                    </Box>
                </Box>
                <SwitchCom />

            </Box>



            <Box sx={{ display: {md: 'none', sm:'flex', xs:'flex'}, alignItems: 'center' }}>
                <input
                    className={`${styles.searchInput} ${styles['searchInput-res']}`}
                    onChange={(e) => searchValue.current = e.target.value}
                    type='search'
                    placeholder="Search Job titles or companies"

                    style={{ background: theme === 'dark' ? 'rgb(41, 41, 48)' : 'white', color: theme === 'dark' ? 'white' : "black", borderColor: theme === 'dark' ? 'white' : 'gray' }}
                />
                <Button sx={{ border: '1px solid gray', borderLeft: 'none', borderRadius: '0px', borderColor: theme === 'dark' ? 'white' : 'gray' }} variant='outlined' onClick={handleClick}>
                    <SearchIcon />
                </Button>
            </Box>


            {/* Filters */}
            <Box mt={2} display="flex" flexWrap="wrap" gap={'2px'}>
                <JobCategoriesSlider filters={filters} />
            </Box>






            {/* infinte scroll */}

            <InfiniteScroll
                dataLength={allJobs?.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<div className={styles['loader-container']}><CircularProgress /></div>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                scrollThreshold={0.9}
            >
                <Box display={'flex'} gap={3} justifyContent={'center'} flexWrap={'wrap'} marginTop={5}>
                    {allJobs?.map((details, i) => (
                        <CardComponent key={i} {...details} />

                    ))}
                </Box>
            </InfiniteScroll>


            {/* </Box> */}
        </Box>
    );
};

export default Jobs;
