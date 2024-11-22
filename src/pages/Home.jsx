import React from 'react'
import Links from '../components/Links.jsx'
import About from '../components/About.jsx'
import '../styles/Home.css'

function Home() {
  return (
    <div className='main-cont'>
      <About/>
      <Links/>
    </div>
  )
}

export default Home