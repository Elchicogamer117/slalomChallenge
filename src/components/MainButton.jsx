import React from 'react'
import '../styles/MainComponents/MainButton.css'

const MainButton = ( {text}) => {
  return (
    <div>
      <button type="button" class="btnBlue"> {text} </button>
    </div>
  )
}

export default MainButton