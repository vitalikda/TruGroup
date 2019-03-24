import { Link } from 'gatsby';
import React from 'react';
import './index.sass';

const GetStarted = () => (
  <section id='get-started' className='section box-shadow'>
    <div className='container'>
      <div className='has-text-centered is-py-5 is-py-desktop-5'>
        <h3 className='is-size-7 has-text-weight-semibold is-uppercase'>
          Get YOUR degree
        </h3>
        <h1 className='title is-size-1 has-text-weight-light has-text-white'>
          Get <span className='has-text-weight-bold'>started</span> now
        </h1>
        <div className='content is-mx-auto'>
          Please use our chat feature to get basic information to determine if you are qualified to apply for university (basic qualifications include being about to graduate, or having graduated high school, having the financial ability to pay the remaining costs of your tuition, airfare, and living expenses, and having a passport from any country other than the United States).
        </div>
        <a
          className='button btn-white is-mt-3'
          href='#'
          id='go'
          onclick='quriobot.start()'
        >
          <strong>Apply Now</strong>
        </a>
      </div>
    </div>
  </section>
)

export default GetStarted
