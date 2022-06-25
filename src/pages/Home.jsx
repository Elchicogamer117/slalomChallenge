import React from 'react'
import Main from '../containers/Main'
import OurWork from '../containers/OurWork'
import TechnologyPlatforms from '../containers/TechnologyPlatforms'
import WhoWeAreCont from '../containers/WhoWeAreCont'
import WhatWereThinking from '../containers/WhatWereThinking'

const Home = () => {
  return (
    <div>
      <Main />
      <div className='py-5'>
        <OurWork />
      </div>
      <section>
        <TechnologyPlatforms />
      </section>
      <section >
        <WhoWeAreCont />
      </section>
      <section className='py-5'>
        <WhatWereThinking />
      </section>
    </div>
  )
}

export default Home