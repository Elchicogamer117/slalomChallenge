import React from 'react'
import PlatformTech from '../components/PlatformTech'
import TechData from '../assets/databases/PlatformTech.json'
import MainButton from '../components/MainButton'
import '../styles/Home/TechnologyPlatforms.css'

const TechnologyPlatforms = () => {
  return (
    <section className='technologyPlatforms'>
      <a href="/" className='col-6 offset-3 mb-4 title'> TECHNOLOGY PLATFORMS </a>
      <div className='col-6 offset-3 platformsTechs'>
        {TechData.map(platform => (
          <PlatformTech platform={platform} key={platform.id} />
        ))}
      </div>
      <div className='offset-3 respTP' > 
      <p className=' col-md-4 descriptionTP'> We have strong partnerships with the world's top tech companies. </p>
        <div className='col-md-3 '>
          <MainButton text={'View all'} />
        </div>
      </div>
    </section>
  )
}

export default TechnologyPlatforms