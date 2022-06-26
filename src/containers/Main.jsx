import React from 'react'
import city from '../assets/images/city.jpg'
import team from '../assets/images/teamwork.jpg'
import confort from '../assets/images/confort.jpg'
import '../styles/Home/Main.css'

const Main = () => {
  return (
    <div className='main'>
      <div id="carousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-pause="false" >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={team} className="d-block w-100 h-50" alt="team" />
          </div>
          <div className="carousel-item">
            <img src={confort} className="d-block w-100 h-50" alt="confort" />
          </div>
          <div className="carousel-item">
            <img src={city} className="d-block w-100 h-50" alt="city" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
        <div class="overlay">
        <div class="container h-100">
          <div class="row d-flex align-items-center h-100">
            <div class="col-md-12 col-xl-8 justify-content-center text-center text-md-start">
              <p class="slogan">Building better tomorrows</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>

  )
}

export default Main