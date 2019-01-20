import { Link } from 'gatsby';
import React from 'react';
import './index.sass';


const Hero = () => (
  <section id='hero-image' className='hero is-medium has-bg-img box-shadow'>
    <div className='hero-body'>
      <div className='container'>
        <h3 className='is-size-7 has-text-weight-semibold is-uppercase'>
          PLAN YOUR education
        </h3>
        <h1 className='title is-size-1 has-text-weight-light'>
          Get your <span className='has-text-weight-bold'>scholarship</span>
        </h1>
        <h2 className='subtitle is-size-6'>
          Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.
        </h2>
        <Link className='button is-primary'>
          <span>Let's chat </span>
          <span className='icon'>
            <i className='fas fa-comment'></i>
          </span>
        </Link>
      </div>
    </div>
  </section>
)

export default Hero
