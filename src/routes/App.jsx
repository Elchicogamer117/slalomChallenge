import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../containers/Layout'
import Home from '../pages/Home'
import WhoWeAre from '../pages/WhoWeAre'
import '@styles/global.css'

const App = () => {
  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path = '/' element = { <Home /> } />
            <Route path = '/WhoWeAre' element = { <WhoWeAre /> } />
          </Routes>
        </Layout>
      </BrowserRouter>
  )
}

export default App
