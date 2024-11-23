import React from 'react'
import '../styles/Links.css'
import sf from '../assets/sf.svg'
import yt from '../assets/yt.svg'
import ig from '../assets/ig.svg'
import gh from '../assets/gh.svg'
import tw from '../assets/tw.svg'
import dd from '../assets/dd.svg'

function Links() {
  return (
    <div className='main-links'>
      <div className='links-cont'>
        <div className='conts'>
          <a href='https://www.youtube.com/@DotDager' target='blank'><img className='icons' id='yt' src={yt} alt='YouTube icon'/></a>
        </div>
        <div className='conts'>
          <a href='https://www.instagram.com/dager.32/' target='_blank'><img className='icons' src={ig} alt='Instagram icon'/></a>
        </div>
        <div className='conts'>
          <a href='https://github.com/MarianoVilla' target='_blank'><img className='icons' src={gh} alt='GitHub icon'/></a>
        </div>
        <div className='conts'>
          <a href='https://open.spotify.com/artist/6bkClBMJd4qKxJp0J5vHsz' target='_blank'><img className='icons' src={sf} alt='Spotify icon'/></a>
        </div>
        <div className='conts'>
          <a href='https://discord.gg/4NFk6TamAB' target='_blank'><img className='icons' id='dd' src={dd} alt='Discord icon'/></a>
        </div>
        <div className='conts'>
          <a href='https://www.twitch.tv/dagerxiv' target='_blank'><img className='icons' id='tw' src={tw} alt='Twitch icon'/></a>
        </div>
      </div>
      <footer>
        <span>Copyright&#169; 2024</span>
      </footer>
    </div>
  )
}

export default Links