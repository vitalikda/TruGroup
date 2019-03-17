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
          Our program can help you increase your chance of getting into university in the United States with our partnered universities, and the possibility of a scholarship for up to 50% off tuition per year. Open to any student not from the USA who has the ability to pay for remaining costs of education (after scholarship). Our services are free and we will help advocate on your behalf. Only cost to apply is the university application cost (where applicable). We expect to give out $100,000 in new scholarships this year.
        </h2>
        <Link 
          to='#'
          className='button is-primary'
          id='go'
          onclick='quriobot.start()'
        >
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
