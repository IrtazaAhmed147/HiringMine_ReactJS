import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        categories: [],
        allProfiles: [],
        isLoading: false,
        error: null,

    },
    reducers: {
        fetchProfileStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        fetchProfileSuccess: (state, action) => {
            state.isLoading = false;

            state.allProfiles = [...action.payload.profile];

        },
        fetchCategorySuccess: (state, action) => {
         

            state.isLoading = false;

            state.categories = [...action.payload.categories];

        },
        fetchProfileFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    },
});

export const { fetchProfileStart, fetchProfileSuccess, fetchProfileFailure ,fetchCategorySuccess} = profileSlice.actions;


export const fetchProfileSlider = () => async (dispatch) => {
    try {
        dispatch(fetchProfileStart());

        const res = await axios.get('https://hiringmine-railway-development.up.railway.app/api/users/home?sortBy=mostViewed');

        dispatch(fetchProfileSuccess({ profile: res.data.data }));
    } catch (err) {
        dispatch(fetchProfileFailure(err.message));
    }
};
export const fetchCategories = () => async (dispatch) => {
    try {
        dispatch(fetchProfileStart());

        const res = await axios.get('https://hiringmine-railway-development.up.railway.app/api/categories/all');
       

        dispatch(fetchCategorySuccess({ categories: res.data.data }));
    } catch (err) {
        dispatch(fetchProfileFailure(err.message));
    }
};

export default profileSlice.reducer;
