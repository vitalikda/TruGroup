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
          Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.
        </div>
        <Link className='button btn-white is-mt-3'>
          <strong>Apply Now</strong>
        </Link>
      </div>
    </div>
  </section>
)

export default GetStarted
