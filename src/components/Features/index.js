import React from 'react'
import { graphql, Link } from 'gatsby'

import './index.sass'

const Features = () => (
  <section id='features' className='section box-shadow'>
    <div className='container'>
      <img 
        src='/icons/clouds-1.svg'
        className='clouds-top-left'
      />
      <img 
        src='/icons/clouds-2.svg'
        className='clouds-bottom-left'
      />
      <img 
        src='/icons/clouds-3.svg'
        className='clouds-top-right'
      />
      <div className='has-text-centered is-py-5 is-py-desktop-5'>
        <h3 className='is-size-7 has-text-weight-semibold is-uppercase'>
          COMMITTED TO YOUR SUCCESS
        </h3>
        <h1 className='title is-size-4'>
          How we can help you get accepted
        </h1>
      </div>
      <div className='columns is-centered is-variable is-8 is-py-5 is-py-desktop-5'>
        <div className='column is-variable is-12-mobile is-4-tablet is-3-desktop is-3-widescreen is-4-fullhd has-text-centered'>
          <span className='icon'>
            <img src='/icons/home.svg'/>
          </span>
          <p className='header is-mt-5'>Counseling + Pre-Check</p>
          <p>Our technology (chat feature) and advisors (nonprofit employees) assist you through finding the right university to fit your qualifications and financial needs (this is a fully free process). They will let you know what scholarships are available to you and which universities are a good fit for your career objectives and current English level.</p>
        </div>
        <div className='column is-variable is-12-mobile is-4-tablet is-3-desktop is-3-widescreen is-4-fullhd has-text-centered'>
          <span className='icon'>
            <img src='/icons/chat.svg'/>
          </span>
          <p className='header is-mt-5'>Application + Documents</p>
          <p>After you have decided which university fits your financial and career needs, we will provide the application for you to fill out directly from the university (application costs depend upon university). If documents are required, you will have to send those into the university (transcripts, recommendation letters).</p>
        </div>
        <div className='column is-variable is-12-mobile is-4-tablet is-3-desktop is-3-widescreen is-4-fullhd has-text-centered'>
          <span className='icon'>
            <img src='/icons/scholar.svg'/>
          </span>
          <p className='header is-mt-5'>Acceptance + Visa Process </p>
          <p>After applying, our staff will directly contact the university and advocate on your behalf to improve your chance of acceptance. If accepted you will then be given an i20 visa application (which you are responsible to complete on your own). We will continue to be involved even after you arrive to advocate your needs to the university.</p>
        </div>
      </div>
      <div className='columns is-centered is-vcentered is-0 is-pb-5 is-py-desktop-5'>
        <div className='column is-one-fifth has-text-centered'>
          <a 
            className='button is-danger is-inverted'
            href='https://bit.ly/2WM0Enb'
            target='_blank'
          >
            Apply now
          </a>
        </div>
        <div className='column is-one-fifth has-text-centered'>
          <div className='is-divider' data-content='OR'></div>
        </div>
        <div className='column is-one-fifth has-text-centered'>
          <Link 
            className='button is-primary is-inverted'
            to='/resources'
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  </section>
)

export default Features
