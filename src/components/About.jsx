import React, {useState} from 'react'
import '../styles/About.css'
import dagerPic from '../assets/pfp.png'
import {Link} from 'react-router-dom'

function About() {
  const [english, setEnglish] = useState(false)
  return (
    <div className='pro-cont'>
      <div className='nav-bar'>
        <button onClick={()=> setEnglish(!english)}>{english ? 'ES' : 'EN'}</button>
      </div>
      <div className='main-cont'>
        <div className='left-div'>
          <div className='text-conteiner'>
            <h1>{english ? "Hello I'm " : 'Hola soy ' }<strong>Dot Dager.</strong></h1>
            <p className='about-him'>{english ? 'Senior Full-Stack Programmer, creator of quality content on YouTube, “serial teller of bullshit jokes”, lover of music (especially guitars) and cats, besides having a rare obesession with cucumbers.' : 'Programador Senior Full-Stack, creador de contenido de calidad en YouTube, "contador serial de chistes de mierda", amante de la música (en especial las guitarras) y los gatos, además de tener una rara obesesión con los pepinos.'}</p>
          </div>
        </div>
        <div className='right-div'>
          <Link to='/game'>
            <img className='dager-pic' src={dagerPic} alt="Picture where is Dot Dager"/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About