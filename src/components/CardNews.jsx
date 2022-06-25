import React from 'react'
import '../styles/Home/CardNews.css'

const CardNews = ({ allNews }) => {
  return (
    <a href='/' className='cardNews'>
      <h3 className='titleCN'> news </h3>
      <p className='headline'> {allNews.title} </p>
    </a>
  )
}

export default CardNews