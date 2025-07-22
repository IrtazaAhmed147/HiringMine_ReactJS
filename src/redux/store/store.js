import { configureStore } from '@reduxjs/toolkit'
import  themeReducer  from '../themeSlice'
import  jobsReducer  from '../jobsSlice.js'
import profileReducer from '../profilesSlice.js'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    jobs: jobsReducer,
    profile: profileReducer,
  },
})