import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{ width: '100%', height: '300px' }} className='d-flex flex-column justify-content-center align-items-center'>
      <div className="footer-div d-flex justify-content-evenly w-100 flex-wrap">
        <div className="website" style={{width:'400px' }}>
          <h4 className='mb-3'><i className="fa-solid fa-cloud-arrow-down"></i>{' '}
            Media Player</h4>
          <h6>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</h6>
          <h6>Code licensed MIT, docs CC BY 3.0.</h6>
          <p>Currently v5.0.0.</p>
        </div>
        <div className="links d-flex flex-column">
          <h4 className='mb-3'>Links</h4>
          <Link to={'/'}  style={{textDecoration:'none',color:'white'}}>Landing page</Link>
          <Link to={'/home'}  style={{textDecoration:'none',color:'white'}}>Home</Link>
          <Link to={'/watch-history'}  style={{textDecoration:'none',color:'white'}}>WatchHistory</Link>
        </div>
        <div className="guides">
        <h4 className='mb-3'>Guides</h4>
          <Link to={'https://getbootstrap.com/'}  style={{textDecoration:'none',color:'white'}}>React</Link>
          <Link to={'https://getbootstrap.com/'}  style={{textDecoration:'none',color:'white'}}>Bootstrap</Link>
          <Link to={'https://getbootstrap.com/'}  style={{textDecoration:'none',color:'white'}}>Routing</Link>
        </div>
        <div className="contact">
        <h4>Contact Us</h4>
          <div className="sub d-flex  mt-3">
            <input type="text" className="form-control me-2" placeholder='Enter Your Email' />
            <button className='btn btn-primary' >Subscribe</button>
          </div>
          <div className="icons fs-4 d-flex justify-content-evenly mt-5">
          <Link to={'/'}  style={{textDecoration:'none',color:'white'}}><i className="fa-solid fa-envelope"></i></Link>
          <Link to={'/home'}  style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-twitter"></i></Link>
          <Link to={'/watch-history'}  style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-linkedin"></i></Link>
          <Link to={'/watch-history'}  style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram"></i></Link>
          <Link to={'/watch-history'}  style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook"></i></Link>

          </div>
        </div>
      </div>
      <p>
        Copyright © 2023 Media Player.Build with React
      </p>
    </div>
  )
}

export default Footer