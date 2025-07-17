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
import useFetch from '../../hooks/useFetch.jsx'
import { useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import './jobs.css'
import SwitchCom from '../../Components/switch/SwitchCom.jsx';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

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


    const [allJobs, setAllJobs] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [total, setTotal] = useState(0);
    const limit = 10;
    // const [userInput, setUserInput] = useState('')
    const searchValue = useRef('')


    const fetchMoreData = async (reset = false) => {
        console.log(pageNo);

        try {
            const res = await axios.get(`https://hiringmine-railway-development.up.railway.app/api/jobAds/all`, {
                params: {
                    limit,
                    pageNo: reset ? 1 : pageNo,
                    keyWord: searchValue.current,
                    category: '',
                    isPending: false,
                    skills: ''
                }
            });

            const newJobs = res?.data?.data || [];
            const totalCount = res?.data?.count || 0;

            if (reset) {
                setAllJobs(newJobs);
            } else {
                setAllJobs(prev => [...prev, ...newJobs]);
            }
            setPageNo(prev => prev + 1);
            setTotal(totalCount);

            setHasMore((prevJobs) =>
                (reset ? newJobs.length : allJobs.length + newJobs.length) < 50
            );
        } catch (err) {
            console.error('Failed to fetch jobs:', err);
            setHasMore(false);
        }
    };

    // Initial load
    useEffect(() => {
        fetchMoreData();
    }, []);

    const handleClick = () => {
        console.log(searchValue);
        setPageNo(1);
        setAllJobs([])
        setHasMore(true)
        fetchMoreData(true)

    }

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const { theme } = useSelector((state) => state.theme)

    return (
        <Box sx={{ px: 4, py: 2, backgroundImage: theme === 'dark' && 'linear-gradient(rgb(33, 33, 38) 0%, rgb(33, 33, 38) 69.79%, rgb(33, 33, 38) 99.99%, rgb(33, 33, 38) 100%)', minHeight: '100vh' }}>
            {/* Top Header */}
            <Box display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap" gap={2}>
                <Link to={'/'}>
                <Box width={'200px'} component={'img'} src={logo} />
                </Link>

                <Box sx={{ display: 'flex', gap: '20px' }}>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <input
                            className='searchInput'
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

            {/* Filters */}
            <Box mt={2} display="flex" flexWrap="wrap" gap={'2px'}>
               

                {filters.map((filter, i) => (

                    <FormControl sx={{ m: 1, minWidth: '200px' }}>
                        <InputLabel sx={{ color: 'white' }} id="demo-simple-select-autowidth-label">{filter.name}</InputLabel>
                        <Select
                            sx={{  padding: '0px 14px', backgroundColor: '#6851ff', border: 'none', borderRadius: '20px', color: 'white' }}
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            // value={age}
                            // onChange={handleChange}
                            autoWidth
                            // label="Age"
                        >
                            {filter.options.map((value, i) => (
                                <MenuItem sx={{ borderRadius: '20px' }} value={value} key={i}>{value}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                ))}
            </Box>



            {/* infinte scroll */}

            <InfiniteScroll
                dataLength={allJobs?.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<div className="loader-container"><CircularProgress color="inherit" /></div>}
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
