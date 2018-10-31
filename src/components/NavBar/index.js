import React from 'react'
import { Link } from 'gatsby'
import config from '../../../meta/config.js'

import logo from '../../img/logo.png'

class NavBar extends React.Component {

  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  state = { showMenu: false }
  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
    const menuVis = this.state.showMenu ? 'is-active' : '';
    return (
      <section className='section is-header'>
        <div className='container'>
          <nav className='navbar is-transparent' aria-label='main navigation'>
            <div className='navbar-brand'>
              <Link to='/' className='navbar-item'>
                <img src={logo} alt={config.siteTitle} />
              </Link>
              <Link
                to='/'
                className={`navbar-burger burger ${menuVis}`}
                aria-label='menu'
                aria-expanded='false'
                onClick={this.toggleMenu}
              >
                <span />
                <span />
                <span />
              </Link>
            </div>

            <div className={`navbar-menu ${menuVis}`}>
              <div className='navbar-end'>
                <Link className='navbar-item' to='/'>
                  Home
                </Link>

                <div className='navbar-item has-dropdown is-hoverable'>
                  <Link className='navbar-link is-arrowless' to='/'>
                    Services
                  </Link>

                  <div className='navbar-dropdown is-boxed'>
                    <Link className='navbar-item' to='/'>
                      Residential Carpet Cleaning
                    </Link>
                    <Link className='navbar-item' to='/'>
                      Commercial Carpet Cleaning
                    </Link>
                    <Link className='navbar-item' to='/'>
                      Upholstery and Furniture Cleaning
                    </Link>
                    <Link className='navbar-item' to='/'>
                      Spot and Stain Removal
                    </Link>
                    <Link className='navbar-item' to='/'>
                      Odor Removal
                    </Link>
                    <Link className='navbar-item' to='/'>
                      Rug Cleaning
                    </Link>
                    <Link className='navbar-item' to='/'>
                      Water Damage Removal
                    </Link>
                    <Link className='navbar-item' to='/'>
                      Fire Damage Removal
                    </Link>
                    <Link className='navbar-item' to='/'>
                      Mold and Mildew Removal
                    </Link>
                    <Link className='navbar-item' to='/'>
                      Tile and Grout Cleaning
                    </Link>
                    <Link className='navbar-item' to='/'>
                      Building and Renovation Cleaning
                    </Link>
                    <Link className='navbar-item' to='/'>
                      Mattress Cleaning
                    </Link>
                    <hr className='navbar-divider' />
                    <Link className='navbar-item' to='/'>
                      Other
                    </Link>
                  </div>
                </div>

                <Link className='navbar-item' to='/pricing'>
                  Pricing
                </Link>

                <Link className='navbar-item' to='/about'>
                  Our Company
                </Link>

                <Link className='navbar-item' to='/blog'>
                  Blog
                </Link>

                <Link className='navbar-item' to='/contact'>
                  Contact Us
                </Link>

                <div className='navbar-item'>
                  <div className='field is-grouped'>
                    <p className='control'>
                      <a href="https://www.facebook.com/TorontoRugCleaning" target="_blank" rel="nofollow">
                        <span className="icon has-text-black">
                          <i className="fab fa-facebook-f"></i>
                        </span>
                      </a>
                    </p>
                    <p className='control'>
                      <a href="https://twitter.com/toronto_rug" target="_blank" rel="nofollow">
                        <span className="icon has-text-black">
                          <i className="fab fa-twitter"></i>
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </nav>
        </div>
      </section>
    )
  }
}

export default NavBar
