import React from 'react'
import '../styles/Home/CardWWT.css'

const CardWWT = ({ mainNews }) => {
  return (
    <div>
      <div className='cardWWT'>
        <p className='headerCWWT'> {mainNews.type} </p>
        <img src={mainNews.image} alt={mainNews.title} />
        <div className='descriptionCWWT'>
          <span> {mainNews.title} </span>
        </div>
      </div>
    </div>
  )
}

export default CardWWT