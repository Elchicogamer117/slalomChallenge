import React from 'react'
import Main from '../containers/Main'
import OurWork from '../containers/OurWork'

const Home = () => {
  return (
    <div>
      <Main />
      <div className='py-5'>
        <OurWork />
      </div>
    </div>
  )
}

export default Home