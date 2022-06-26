import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../assets/icons/facebook.svg'
import twitter from '../assets/icons/twitter.svg'
import instagram from '../assets/icons/instagram.svg'
import linkedin from '../assets/icons/linkedin.svg'
import '../styles/Layout/Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <section className='containerFt'>
        <header className='slalomHdFt'>
          <Link to='/'> slalom </Link>
        </header>
        <p className='slalomContFt'> 
        Have you seen what we've been working on at <a href="https://www.slalombuild.com/">Slalom Build?</a> <br /> <br />
        Visit our Medium publication <a href="https://medium.com/the-slowdown">The Slowdown</a> for explorations of diversity, inclusion, and the future. 
        </p>
        <aside className='whatwedoFt'> 
          <Link to='/' className='fistChild'> What we do </Link>
          <p>_________________________</p>
          <Link to='/'> Strategy </Link>
          <Link to='/'> Technology </Link>
          <Link to='/'> Industries </Link>
          <Link to='/'> Caase studies </Link>
        </aside>
        <aside className='platformsFt'>
          <Link to='/' className='fistChild'> Platforms </Link>
          <p>_________________________</p>
          <Link to='/'> AWS </Link>
          <Link to='/'> Google Cloud </Link>
          <Link to='/'> Microsoft </Link>
          <Link to='/'> Salesforce </Link>
          <Link to='/'> Snowflake </Link>
          <Link to='/'> Tableau </Link>
        </aside>
        <aside className='whoweareFt'>
          <Link to='/' className='fistChild'> Who we are </Link>
          <p>_________________________</p>
          <Link to='/'> Culture </Link>
          <Link to='/'> Inclusion, diversity and equity </Link>
          <Link to='/'> SustainabiLinkty and impact </Link>
          <Link to='/'> Newsroom </Link>
        </aside>
        <header className='othersHdFt fistChild'>
          <Link to='/'> Insights </Link>
          <Link to='/'> Careers </Link>
          <Link to='/'> Locations </Link>
        </header>
        <aside className='divisionFt'>
        <p>_______________________________________________________________________________________________</p>
        </aside>
        <aside className='divisionLargeFt'>
        <p>_________________________________________________________________________________________________________________________</p>
        </aside>
        <aside className='divisionSmallFt'>
        <p>_____________________________________________________________</p>
        </aside>
        <aside className='socialNet'>
          <a href="https://www.facebook.com/slalomconsulting">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://twitter.com/slalom">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="https://www.instagram.com/slalomconsulting/">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="https://www.linkedin.com/company/slalom-consulting/">
            <img src={linkedin} alt="linkedin" />
          </a>
        </aside>
        <aside className='documentsFt'>
          <Link to='/'> Privacy policy </Link>
          <Link to='/'> Terms of use </Link>
          <Link to='/'> Cookie settings </Link>
        </aside>
        <aside className='registerFt'>
          <Link to='/'> © 2022 Slalom, LLC </Link>
          <Link to='/'> All rights reserved </Link>
        </aside>
        <aside className='finaltextFt' >
          <Link to='/'> Love your future </Link>
          <aside className='figureFt'> </aside>
        </aside>

      </section>

    </footer>
  )
}

export default Footer