import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    allJobs: [],
    isLoading: false,
    error: null,
    total: 0,
    hasMore: true,
    pageNo: 1,
  },
  reducers: {
    fetchJobsStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchJobsSuccess: (state, action) => {
      state.isLoading = false;
      state.allJobs = [...state.allJobs, ...action.payload.jobs];
      state.total = action.payload.total;
      state.pageNo += 1;
      state.hasMore = state.allJobs.length < 50;
    },
    fetchJobsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.hasMore = false;
    },
    resetJobs: (state) => {
      state.allJobs = [];
      state.pageNo = 1;
      state.hasMore = true;
    },
  },
});

export const { fetchJobsStart, fetchJobsSuccess, fetchJobsFailure, resetJobs } = jobsSlice.actions;

export const fetchJobs = (searchValue = '', reset = false) => async (dispatch, getState) => {
  try {
    if (reset) dispatch(resetJobs());
    dispatch(fetchJobsStart());

    const { pageNo } = getState().jobs;
    const res = await axios.get('https://hiringmine-railway-development.up.railway.app/api/jobAds/all', {
      params: {
        limit: 10,
        pageNo: reset ? 1 : pageNo,
        keyWord: searchValue,
        category: '',
        isPending: false,
        skills: ''
      }
    });

    dispatch(fetchJobsSuccess({ jobs: res.data.data || [], total: res.data.count || 0 }));
  } catch (err) {
    dispatch(fetchJobsFailure(err.message));
  }
};

export const fetchJobsSlider = () => async (dispatch) => {
  try {
    dispatch(resetJobs());
    dispatch(fetchJobsStart());

    const res = await axios.get('https://hiringmine-railway-development.up.railway.app/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=&isPending=false&skills=' );

    dispatch(fetchJobsSuccess({ jobs: res.data.data || [], total: res.data.count || 0 }));
  } catch (err) {
    dispatch(fetchJobsFailure(err.message));
  }
};

export default jobsSlice.reducer;
