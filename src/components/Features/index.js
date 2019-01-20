import React from 'react'
import { graphql, Link } from 'gatsby'

import './index.sass'

const Features = () => (
  <section id='features' className='section box-shadow'>
    <div className='container'>
      <div className='has-text-centered is-py-5 is-py-desktop-5'>
        <h3 className='is-size-7 has-text-weight-semibold is-uppercase'>
          ABOUT US
        </h3>
        <h1 className='title is-size-4'>
          Read our story &#38; how we can help
        </h1>
      </div>
      <div className='columns is-centered is-variable is-8 is-py-5 is-py-desktop-5'>
        <div className='column is-variable is-12-mobile is-4-tablet is-3-desktop is-3-widescreen is-4-fullhd has-text-centered'>
          <span className='icon'>
            <img src='/icons/home.svg'/>
          </span>
          <p className='header is-mt-5'>Overview</p>
          <p>We are a global nonprofit organization for special admission and scholarship opportunities at American liberal arts universities for foreign students.</p>
        </div>
        <div className='column is-variable is-12-mobile is-4-tablet is-3-desktop is-3-widescreen is-4-fullhd has-text-centered'>
          <span className='icon'>
            <img src='/icons/chat.svg'/>
          </span>
          <p className='header is-mt-5'>Assistance</p>
          <p>We offer admission assistance for international students and a free application to partner universities.</p>
        </div>
        <div className='column is-variable is-12-mobile is-4-tablet is-3-desktop is-3-widescreen is-4-fullhd has-text-centered'>
          <span className='icon'>
            <img src='/icons/scholar.svg'/>
          </span>
          <p className='header is-mt-5'>Scholarship</p>
          <p>We offer a scholarship to partner universities for an undergraduate degree and admissions assistance for undergraduate, graduate, and ESL programs.</p>
        </div>
      </div>
      <div className='columns is-centered is-vcentered is-0 is-pb-5 is-py-desktop-5'>
        <div className='column is-one-fifth has-text-centered'>
          <Link className='button is-danger is-inverted'>
            Apply now
          </Link>
        </div>
        <div className='column is-one-fifth has-text-centered'>
          <div className='is-divider' data-content='OR'></div>
        </div>
        <div className='column is-one-fifth has-text-centered'>
          <Link className='button is-primary is-inverted'>
            Read more
          </Link>
        </div>
      </div>
    </div>
  </section>
)

export default Features
