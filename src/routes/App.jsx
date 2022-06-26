import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../containers/Layout'
import Home from '../pages/Home'
import WhatWeDo from '../pages/WhatWeDo'
import WhoWeAre from '../pages/WhoWeAre'
import Insights from '../pages/Insights'
import Careers from '../pages/Careers'
import '@styles/global.css'

const App = () => {
  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path = '/' element = { <Home /> } />
            <Route path = '/WhatWeDo' element = { <WhatWeDo /> } />
            <Route path = '/WhoWeAre' element = { <WhoWeAre /> } />
            <Route path = '/Insights' element = { <Insights /> } />
            <Route path = '/Careers' element = { <Careers /> } />
            <Route path = '*' element = { <Home /> } />
          </Routes>
        </Layout>
      </BrowserRouter>
  )
}

export default App
