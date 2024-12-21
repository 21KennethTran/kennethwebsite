import React from 'react'
import emailIcon from '../img/emailIcon.png'
import linkedinIcon from '../img/linkedinIcon.png'
import githubIcon from '../img/githubIcon.png'

const Contact = () => {
  return (
    <footer id="contact" className='FooterContainer'>
      <div className='FooterText'>
        <h2>Contact</h2>
        <p>Feel free to come say hi!</p>
      </div>
      <ul className='FooterLinks'>
        <li className='FooterLink'>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:kenpt03@email.com">kenpt03@email.com</a>
        </li>
        <li className='FooterLink'>
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/kenneth-tran-ba708b222">linkedin.com/kenneth-tran-ba708b222</a>
        </li>
        <li className='FooterLink'>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://www.github.com/21KennethTran">github.com/21KennethTran</a>
        </li>
      </ul>
    </footer>
  )
}

export default Contact
