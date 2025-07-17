import React from 'react'
import './jobcard.css'
import { Link } from 'react-router-dom'

function CategoriesCard({ postCounts, name, theme }) {

  return (

    <li className='childbox' style={{ backgroundColor: theme === 'dark' && 'rgb(41, 41, 48)', background: theme === 'light' && 'linear-gradient(180deg, #edebff, hsla(0, 0%, 100%, 0))' }}>

      <Link to="/" className='a'>

        <img src="./assets/box.svg" alt="" />
        <h4 style={{ color: '#4d3bdb' }}>{name}</h4>
        <p className='p' style={{ color: theme === 'dark' ? '#fff' : 'rgb(108, 108, 108)' }}>{postCounts} Jobs</p>
      </Link>
    </li>

  )
}

export default CategoriesCard