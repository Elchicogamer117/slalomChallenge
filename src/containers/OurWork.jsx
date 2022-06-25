import React from 'react'
import CardWork from '../components/CardWork'
import caseStudy from '../assets/databases/CaseStudy.json'
import '../styles/Home/OutWork.css'

const OurWork = () => {
  return (
    <div>
      <a href='/' className='col-8 offset offset-2 title'> WHAT WE DO</a>
      <p className='col-8 offset offset-2 description py-2'> Slalom is a global consulting firm that helps people and organizations dream bigger, move faster, and build better tomorrows for all. </p>
      <button type="button" class="btnBlue offset-2  spc-b"> Learn more </button> <br/>
      <a href='/' className='col-8 offset offset-2 title'> OUR WORK</a>
      <div className='col-8 offset-2 cardsStudy' >
        {caseStudy.map(card => (
          <CardWork card={card} key={card.id} />
        ))}
      </div>
      <div className='col-8 offset-2 py-4'>
        <a href="/"> View all case studies </a>
      </div>
    </div>
  )
}

export default OurWork