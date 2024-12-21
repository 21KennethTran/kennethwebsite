import React from 'react'
import thinking from '../img/thinking.svg'

const Hero = () => {
  return (
    <section className='HeroContainer'>
      <div className='Content'>
        <h1 className='Title'>Hi, I'm Kenneth</h1>
        <p className='Description'>
          I am a Fourth Year Math and Computer Science Major at UC San Diego with interests in embedded systems,
          full stack development, and machine learning. Feel free to reach out to learn more!
        </p>
        <div className='Buttons'>
          <a href="mailto:kenpt03@gmail.com" className='ContactBtn'>Contact Me!</a>
          <a href="https://drive.google.com/file/d/1-ftx_VQAGUt0t60es2oCdNZzgveWjoOI/view?usp=sharing" className='ContactBtn'>Resume</a>
        </div>
      </div>
      <img src={thinking} alt="Hero me" className='HeroImg'/>
      <div className='TopBlur'/>
      <div className='BottomBlur'/>
    </section>
  )
}

export default Hero
