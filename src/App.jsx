
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './Pages/home/Home'
import Navbar from './Components/navbar/Navbar'
import Footer from './Components/footer/Footer'
import LoginPage from './Pages/login/Login'
import Signup from './Pages/signup/Signup'
import Jobs from './Pages/jobs/Jobs'

function App() {

  const location = useLocation()
  return (
    <>
    {/* {location.pathname !== '/login' && location.pathname !== '/signup' && <Navbar />} */}
      <Routes >
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/jobs' element={<Jobs />}/>
      </Routes>

      {/* {location.pathname !== '/login' && location.pathname !== '/signup' && <Footer />} */}
    </>
  )
}

export default App
