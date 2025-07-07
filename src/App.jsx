
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/home/Home'
import Navbar from './Components/navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />}/>
      </Routes>
    </>
  )
}

export default App
