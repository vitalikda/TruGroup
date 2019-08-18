import { Link } from 'gatsby';
import React from 'react';
import config from '../../../meta/config';
import './index.sass';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer id='fotter' className='section'>
      <div className='container'>
        <div className='level is-my-5'>
          <div className='level-left'>
            <div className='level-item'>
              <Link
                to='/'
                className='logo is-unselectable is-size-5 has-text-centered'
              >
                <img src={config.siteLogo} alt={config.siteTitle} />
              </Link>
            </div>
            <div className='level-item'>
              <span class='is-size-7 has-text-weight-light'>sapio academy</span>
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

            <Link className='level-item' to='/resources'>
              Resources
            </Link>

            <div className='level-item'>
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
        <div className='is-my-5 has-text-centered'>
          <p>
            Copyright &copy; {currentYear} {config.copyright}
          </p>
          <p className='is-my-3 has-text-grey-lighter'>
            Coded by{' '}
            <a
              className='has-text-grey-lighter'
              href='https://vitaly.im'
              target='_blank'
            >
              Vitaly <i className='far fa-hand-peace' />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
