import React from 'react'
import { Link } from 'gatsby'
import config from '../../../meta/config.js'

const NavBar = () => {
  return (
    <nav className='navbar is-fixed-top' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item'>
          {config.siteTitle}
        </Link>
        <button className='button navbar-burger' data-target='navMenu'>
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className='navbar-menu' id='navMenu'>
        <div className='navbar-start'>
          <Link className='navbar-item' to='/pricing'>
            Pricing
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link">
              Services
            </Link>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to='/'>
                Residential Carpet Cleaning
              </Link>
              <Link className="navbar-item" to='/'>
                Commercial Carpet Cleaning
              </Link>
              <Link className="navbar-item" to='/'>
                Upholstery and Furniture Cleaning
              </Link>
              <Link className="navbar-item" to='/'>
                Spot and Stain Removal
              </Link>
              <Link className="navbar-item" to='/'>
                Odor Removal
              </Link>
              <Link className="navbar-item" to='/'>
                Rug Cleaning
              </Link>
              <Link className="navbar-item" to='/'>
                Water Damage Removal
              </Link>
              <Link className="navbar-item" to='/'>
                Fire Damage Removal
              </Link>
              <Link className="navbar-item" to='/'>
                Mold and Mildew Removal
              </Link>
              <Link className="navbar-item" to='/'>
                Tile and Grout Cleaning
              </Link>
              <Link className="navbar-item" to='/'>
                Building and Renovation Cleaning
              </Link>
              <Link className="navbar-item" to='/'>
                Mattress Cleaning
              </Link>
              <hr className="navbar-divider" />
              <Link className="navbar-item" to='/'>
                Other
              </Link>
            </div>
          </div>
          <Link className='navbar-item' to='/about'>
            About
          </Link>
          <Link className='navbar-item' to='/blog'>
            Blog
          </Link>
        </div>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='field is-grouped'>
              <p className='control'>
                <Link
                  className='button is-primary is-outlined'
                  to='/contact'>
                  Contact Us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
