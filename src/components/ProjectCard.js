import React from 'react'

const ProjectCard = ({
    project: { title, imageSrc, description, skills, demo, source },
  }) => {
  return (
    <div className='ProjectCardContainer'>
      {/* <img
        src=
        alt=
        className='CardImage'
      /> */}
      <h3 className='CardTitle'>{title}</h3>
      <p className='CardDescription'>{description}</p>
      <ul className='CardSkills'>
        {skills.map((skill, id) => {
          return (
            <li key={id} className='CardSkill'>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className='CardLinks'>
        {/* <a href={demo} className='CardLink'>
          More
        </a> */}
        <a href={source} className='CardLink'>
          Source
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
