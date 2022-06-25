import React from 'react'
import '../styles/Home/CardWork.css'

const CardWork = ({ card }) => {
  return (
    <div>
      <div className='cardWork'>
        <p className='header'> case stydy </p>
        <img src={card.image} alt={card.name} />
        <div className='descriptionCW'>
          <strong> {card.title}: </strong>
          <span> {card.description} </span>
        </div>
      </div>
    </div>
  )
}

export default CardWork