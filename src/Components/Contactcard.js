import React from 'react'
import { Link } from 'react-router-dom'
export default function Contactcard() {
  return (
    <div className='container-fluid d-flex flex-row justify-space-between'>
      <div className='d-flex flex-column'>
          <i class="fa-solid fa-user"></i>
       <Link> <p>Prabadhya Upadhyay</p> </Link>
        <p>Prabadhya.Upadhyay@gmail.com</p>
      </div>
      <div className='d-flex flex-row gap-2'>
       <Link to='/contact/'> <i class="fa-solid fa-user-pen"></i> </Link>
       <Link> <i class="fa-solid fa-trash"></i> </Link>
      </div>
    </div>
  )
}
