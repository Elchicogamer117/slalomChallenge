import React from 'react'
import '../styles/Layout/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbarSection mt-2'>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand fs-1 fw-bold text-light" href="#">slalom</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto sections">
              <li className="nav-item ">
                <a className="nav-link text-light me-5" aria-current="page" href="#">what we do</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light me-5" href="#">who we are</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light me-5" href="#">insights</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light me-5" href="#">carrers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <button type="button" class="btn btn-outline-light btn-sm px-md-4 me-5">le's talk</button>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  english
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">français</a></li>
                  <li><a className="dropdown-item" href="#">日本語</a></li>
                  <li><a className="dropdown-item" href="#">deutsch</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar