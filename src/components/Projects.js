import React from 'react'
import projects from '../data/Projects.json'
import ProjectCard from './ProjectCard'


const Projects = () => {
  return (
    <section className='ProjectContainer' id="projects">
      <h2 className='ProjectTitle'>Projects</h2>
      <div className='ProjectItems'>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  )
}

export default Projects
