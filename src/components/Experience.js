import React from 'react'
import experience from '../data/Experience.json'

const Experience = () => {
  return (
    <section className='ExperienceContainer' id="experience">
      <h2 className='Title'>Experience</h2>
      <div className='Content'>
        <ul className='ExperienceItems'>
          {experience.map((experienceItem, id) => {
            return (
              <li key={id} className='ExperienceItem'>
                {/* <img
                  src=
                  alt=
                /> */}
                <div className='ExperienceItemDetails'>
                  <h3>{`${experienceItem.role}, ${experienceItem.organization}`}</h3>
                  <p>{`${experienceItem.startDate} - ${experienceItem.endDate}`}</p>
                  <ul>
                    {experienceItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  )
}

export default Experience
