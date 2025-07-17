import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    theme: localStorage.getItem('theme') || 'light',
}

export const themeReducer = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        darkTheme: (state) => { state.theme = 'dark' },
        lightTheme: (state) => { state.theme = 'light' },
    },
})

export const { darkTheme, lightTheme} = themeReducer.actions

export default themeReducer.reducer