import React from 'react'
import me from '../img/me.jpg'

const About = () => {
  return (
    <section className='AboutContainer' id="about">
      <h2 className='Title'>About</h2>
      <div className='Content'>
        <img
          src={me}
          alt="Me sitting with a laptop"
          className='AboutImage'
        />
        <ul className='AboutItems'>
          <li className='AboutItem'>
            {/* <img src= alt= /> */}
            <div className='AboutItemText'>
              <h3>Software Engineer</h3>
              <p>
                All of my work revolves around tackling new technologies and exploring emerging architectures. 
                My journey so far has been defined by learning and collaborating in team environments, so I am always excited
                to connect with new people!
              </p>
            </div>
          </li>
          <li className='AboutItem'>
            {/* <img src= alt= /> */}
            <div className='AboutItemText'>
              <h3>Researcher</h3>
              <p>
                Having written my first unpublished research paper on recommender systems exposed to the
                process of data collection, preprocessing, and experimentation. I look to pursue academic
                research opportunities to deepen my understanding of computer science topics!
              </p>
            </div>
          </li>
          <li className='AboutItem'>
            {/* <img src= alt= /> */}
            <div className='AboutItemText'>
              <h3>Leader</h3>
              <p>
                Being an academic tutor for multiple lower-division math courses has taught me to keep
                an open mind and to actively engage with others. I strive to be proactive in sharing knowledge, and
                guiding others towards success!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About
