import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div>

      <nav>
        <Navbar />
      </nav>

      { children }
      
      <footer>
      <Footer />
      </footer>
      
    </div>
  )
}

export default Layout
