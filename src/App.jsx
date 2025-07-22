
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './Pages/home/Home'
import LoginPage from './Pages/login/Login'
import Signup from './Pages/signup/Signup'
import Jobs from './Pages/jobs/Jobs'

function App() {

  const location = useLocation()
  return (
    <>
   
      <Routes >
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/jobs' element={<Jobs />}/>
      </Routes>

    </>
  )
}

export default App
