import { Link } from 'gatsby';
import React from 'react';
import config from '../../../meta/config.js';
import './index.sass';

class NavBar extends React.Component {
  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  state = { showMenu: false };
  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };

  render() {
    const menuVis = this.state.showMenu ? 'is-active' : '';
    return (
      <nav
        className='navbar has-shadow is-transparent'
        aria-label='main navigation'
      >
        <div className='container'>
          <div className='navbar-brand'>
            <Link
              to='/'
              className='navbar-item logo is-unselectable is-size-5 has-text-centered'
            >
              <img src={config.siteLogo} alt={config.siteTitle} />
              <span class='navbar-brand-text is-size-7 has-text-weight-light has-text-left'>
                sapio <br />
                academy
              </span>
            </Link>
            <a
              href='#'
              className={`navbar-burger burger ${menuVis}`}
              aria-label='menu'
              aria-expanded='false'
              onClick={this.toggleMenu}
            >
              <span />
              <span />
              <span />
            </a>
          </div>

          <div className={`navbar-menu ${menuVis}`}>
            <div className='navbar-end'>
              <Link className='navbar-item' to='/'>
                Home
              </Link>

              <Link className='navbar-item' to='/#features'>
                About us
              </Link>

              <Link className='navbar-item' to='/#requirements'>
                Requirements
              </Link>

              <Link className='navbar-item' to='/#testimonials'>
                Reviews
              </Link>

              <Link className='navbar-item' to='/#faq'>
                FAQ
              </Link>

              <Link className='navbar-item' to='/resources'>
                Resources
              </Link>

              <div className='navbar-item'>
                <a
                  className='button button-sec is-size-7'
                  href='https://bit.ly/2WM0Enb'
                  target='_blank'
                >
                  <strong>Apply Now</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
