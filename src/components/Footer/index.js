import { Link } from 'gatsby';
import React from 'react';
import config from '../../../meta/config';
import './index.sass';

const Footer = () => {
  return (
    <footer id='fotter' className='section'>
      <div className='container'>
        <div className='level is-my-5'>
          <div className='level-left'>
            <div className='level-item'>
              <Link to='/' className='logo is-unselectable is-size-5 has-text-centered'>
                <img src={config.siteLogo} alt={config.siteTitle} />
              </Link>
            </div>
          </div>
          <div className='level-right'>

            <Link className='level-item' to='/'>
              Home
            </Link>

            <Link className='level-item' to='/#features'>
              About us
            </Link>

            <Link className='level-item' to='/#requirements'>
              Requirements
            </Link>

            <Link className='level-item' to='/#testimonials'>
              Reviews
            </Link>

            <Link className='level-item' to='/#faq'>
              FAQ
            </Link>

            <Link className='level-item' to='/blog'>
              Blog
            </Link>

            <div className='level-item'>
              <a
                className='button button-sec is-size-7'
                href='#'
                id='go'
                onclick='quriobot.start()'
              >
                <strong>Apply Now</strong>
              </a>
            </div>

          </div>
        </div>
        <div className='level is-my-5'>
          <div className='level-left has-text-grey-lighter'>
            <p>{config.copyright} <span>Coded by <a className='has-text-grey-lighter' href='https://vitaly.im' target='_blank'>Vitaly <i className='far fa-hand-peace'></i></a></span></p>
          </div>
          <div className='level-item'>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
