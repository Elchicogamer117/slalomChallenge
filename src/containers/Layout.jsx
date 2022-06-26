import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      { children }
      
      <footer>
      <Footer />
      </footer>
    </div>
  )
}

export default Layout
