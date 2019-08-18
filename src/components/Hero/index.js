import { Link } from 'gatsby';
import React from 'react';
import './index.sass';

const Hero = () => (
  <section id='hero-image' className='hero is-medium has-bg-img box-shadow'>
    <div className='hero-body'>
      <div className='container'>
        <h3 className='is-size-7 has-text-weight-semibold is-uppercase'>
          PLAN YOUR EDUCATION
        </h3>
        <h1 className='title is-size-1 has-text-weight-light'>
          Get your <span className='has-text-weight-bold'>scholarship</span>
        </h1>
        <h2 className='subtitle is-size-6'>
          Tru Group's 'Sapio Academy' can help you increase your chance of
          getting into university in the United States with our partnered
          universities, and the possibility for a scholarship up to 50% off
          tuition per year. Open to any student not from the USA who has the
          ability to pay for remaining costs of education (after scholarship).
          Our advice and assistance is free and we will help advocate on your
          behalf. Only cost to apply is the university application cost (where
          applicable). We expect to facilitate $100,000 in new scholarships this
          year.
        </h2>
        <a
          className='button is-primary'
          href='#'
          id='go'
          onClick='quriobot.start()'
        >
          <span>Let's chat </span>
          <span className='icon'>
            <i className='fas fa-comment' />
          </span>
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
