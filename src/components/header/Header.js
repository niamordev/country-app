import React, { useEffect, useState}  from 'react'
import DarkLightMode from '../darkLightMode/DarkLightMode'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <header>
      <div className="container-header">
       <Link className='links' to={'/country-app/'}> <h2>Niamor Industry</h2></Link>
        <DarkLightMode />
        </div>
    </header>
  )
}
