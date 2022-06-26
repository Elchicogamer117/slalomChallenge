import React from 'react'
import MainButton from '../components/MainButton'
import '../styles/Home/CallToAction.css'

const TheFutureIsToday = () => {
  return (
    <section className='theFutureIsToday'>
      <h2> Your future starts today. Ready? </h2>
      <div className='callToAction'>
        <MainButton text={"Let's talk"}/>
      </div>
    </section>
  )
}

export default TheFutureIsToday