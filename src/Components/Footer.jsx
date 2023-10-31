import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <hr />
      <div className='d-flex flex-column justify-content-center align-items-center flex-wrap' style={{ width: '100%', height: '300px' }}>
        <div className="footer-content d-flex justify-content-evenly w-100 mb-5">
          <div className="website" style={{ width: '30%' }}>
            <h4>
              <i className="fa-sharp fa-solid fa-swatchbook fa-rotate-90"></i>{'  '}Project Fair
            </h4>
            <h6 className='text-secondary'>Designed and built with all the love in the world by the Project Fair team with the help of our contributors.</h6>
            <h6 className='text-secondary'>Code licensed Project Fair, docs CC BY 1.0.</h6>
            <h6 className='text-secondary'>Currently v1.0.0.</h6>
          </div>
          <div className="links d-flex flex-column">
            <h4>Links</h4>
            <Link to={'/'} className='text-decoration-none text-secondary'>Home</Link>
            <Link to={'/register'} className='text-decoration-none text-secondary'>Register</Link>
            <Link to={'/login'} className='text-decoration-none text-secondary'>Login</Link>
          </div>
          <div className="guides d-flex flex-column">
            <h4>Guides</h4>
            <Link to={'https://react.dev/'} className='text-decoration-none text-secondary'>React</Link>
            <Link to={'https://getbootstrap.com/'} className='text-decoration-none text-secondary'>Bootstrap</Link>
            <Link to={'https://react-bootstrap.netlify.app/'} className='text-decoration-none text-secondary'>React Bootstrap</Link>
          </div>
          <div className="contact">
            <h4>Contact Us</h4>
            <div className='d-flex align-items-center pe-3'>
              <input class="form-control me-sm-3" type="search" placeholder="Enter your E-mail" wfd-id="id0" />
              <button type="button" class="btn btn-outline-primary">Subscribe</button>
            </div>
            <div className='d-flex justify-content-evenly fs-4 mt-4'>
              <Link to={'https://www.linkedin.com/feed/'} className='text-decoration-none text-secondary'><i className="fa-brands fa-linkedin"></i></Link>
              <Link to={'https://twitter.com/'} className='text-decoration-none text-secondary'><i class="fa-brands fa-x-twitter"></i></Link>
              <Link to={'https://www.instagram.com/'} className='text-decoration-none text-secondary'><i class="fa-brands fa-instagram"></i></Link>
            </div>
          </div>
        </div>
        <p className='text-secondary'>Copyright @ 2023 Project Fair. Built with React.</p>
      </div>
    </div>
  )
}

export default Footer