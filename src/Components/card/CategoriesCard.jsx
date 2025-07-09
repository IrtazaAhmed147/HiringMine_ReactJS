import React from 'react'
import './jobcard.css'
import { Link } from 'react-router-dom'

function CategoriesCard({ postCounts, name }) {

  return (
    <ul className='job-box'>
      <li className='childbox'>

        <Link to="/">

          <img src="./assets/box.svg" alt="" />
          <h4 >{name}</h4>
          <p>{postCounts} Jobs</p>
        </Link>
      </li>
    </ul>
  )
}

export default CategoriesCard