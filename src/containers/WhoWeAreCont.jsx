import React from 'react'
import MainButton from '../components/MainButton'
import '../styles/Home/WhoWeAreCont.css'

const circleImg = 'https://www.slalom.com/sites/default/files/2020-06/homepage-working-circle-2-600x600.png'
const midCircleImg = 'https://images.pexels.com/photos/3747462/pexels-photo-3747462.jpeg?auto=compress&cs=tinysrgb&w=1600'
const rectangleImg = 'https://www.slalom.com/sites/default/files/2019-03/Three-images-with-content-landscape-840x1190.jpg'

const WhoWeAreCont = () => {

  return (
    <section >
      <div className="containerWWAC">

        <div className="containerWWA">
          <div className='midCircleImg'>
            <img src={midCircleImg} alt="circulo" />
          </div>
          <div className='rectangleImg'>
            <img src={rectangleImg} alt="rectangulo" />
          </div>
        </div>


        <div className="infoWWAC">
          <div className='rpvSm'>
            <a href="/" className='title titleWWA'> WHO WE ARE </a>
            <p className='headerWWA'> We’re advisors, strategists, and engineers focused on people, above all else. </p>
            <p className='descriptionWWA'> Slalom teams are driven to do what's right and help you realize your vision. We believe in generating success collaboratively, leaving your organization stronger after every engagement, and building trust for the next big challenge. </p>
            <div>
              <MainButton text={'Get to know us'} />
            </div>
          </div>
        </div>

        <div className="circleImage">
          <img src={circleImg} alt="Working" className='circle'/>
        </div>

      </div>

    </section>
  )
}

export default WhoWeAreCont