import React from 'react'
import '../styles/Home/PlatformTech.css'
const PlatformTech = ({ platform }) => {
  return (
    <section className=" platformTech">
      <a href="./" >
        <img src={platform.image} alt={platform.name} />
      </a>
    </section>
  )
}

export default PlatformTech