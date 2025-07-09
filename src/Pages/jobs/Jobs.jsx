import {
    Box, TextField, InputAdornment, IconButton, Button, MenuItem,
    CircularProgress
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logo from '../../assets/logo.png'
import CardComponent from '../../Components/card/CardComponent';
import useFetch from '../../hooks/useFetch.jsx'
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import './jobs.css'

const filters = [
    'Category', 'Date Posted', 'Job Type', 'Seniority Level', 'On-Site/Remote', 'Salary Range', 'Experience'
];


const Jobs = () => {
    // const { data, loading, error } = useFetch('https://hiringmine-railway-development.up.railway.app/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=&isPending=false&skills=')
    // console.log(data.data);

    const [allJobs, setAllJobs] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [total, setTotal] = useState(0);
    const limit = 10;


    const fetchMoreData = async () => {
        try {
            const res = await axios.get(`https://hiringmine-railway-development.up.railway.app/api/jobAds/all`, {
                params: {
                    limit,
                    pageNo,
                    keyWord: '',
                    category: '',
                    isPending: false,
                    skills: ''
                }
            });

            const newJobs = res?.data?.data || [];
            const totalCount = res?.data?.count || 0;

            const updatedJobs = [...allJobs, ...newJobs];
            setAllJobs(updatedJobs);
            setPageNo(prev => prev + 1);
            setTotal(totalCount);

            console.log(allJobs.length);
            console.log(newJobs.length);
            console.log(totalCount);

            if (updatedJobs.length >= 50) {
                console.log(totalCount);

                setHasMore(false);
            }
        } catch (err) {
            console.error('Failed to fetch jobs:', err);
            setHasMore(false);
        }
    };

    // Initial load
    useEffect(() => {
        fetchMoreData();
    }, []);
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
            {/* <Box display={'flex'} gap={3} justifyContent={'center'} flexWrap={'wrap'} marginTop={5}> */}

            {/* {data && data?.data?.map((details) => (
                    <CardComponent {...details} />

                ))} */}

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
                    {allJobs?.map((details) => (
                        <CardComponent {...details} />

                    ))}
                </Box>
            </InfiniteScroll>


            {/* </Box> */}
        </Box>
    );
};

export default Jobs;
