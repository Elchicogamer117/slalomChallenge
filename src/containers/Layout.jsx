import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      { children }
      <div className='bg-secondary'>
      <Footer />
      </div>
    </div>
  )
}

export default Layout
