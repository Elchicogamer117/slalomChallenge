import React from 'react'
import '../styles/OutWork.css'

const OurWork = () => {
  return (
    <div>
      {/* <a href='/' className='col-lg-8 col-md-12 col-sm-8 offset offset-lg-2 offset-md-0 offset-sm-2 title'> WHAT WE DO</a>
      <p className='col-lg-8 col-md-12 col-sm-8 offset-lg-2 offset-md-0 offset-sm-2 description py-2'> Slalom is a global consulting firm that helps people and organizations dream bigger, move faster, and build better tomorrows for all. </p> */}
      <a href='/' className='col-8 offset offset-2 title'> WHAT WE DO</a>
      <p className='col-8 offset offset-2 description py-2'> Slalom is a global consulting firm that helps people and organizations dream bigger, move faster, and build better tomorrows for all. </p>
      <button type="button" class="btn btn-outline-primary offset-2 mb-2">Lear more</button><br/>
      <button type="button" class="btnBlue offset-2">Lear more</button>
    </div>
  )
}

export default OurWork