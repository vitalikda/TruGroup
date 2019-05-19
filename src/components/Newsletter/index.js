import React from 'react';
import './index.sass';

const Newsletter = () => (
  <section id='newsletter' className='section box-shadow'>
    <div className='container is-my-1 is-my-tablet-5'>
      <div className='columns is-vcentered is-mx-1 is-mx-tablet-5'>
        <div className='column is-mx-3'>
          <h2 className='title is-size-6'>
            Join our not frequent newsletter
          </h2>
          <p>Keep up to date on our latest scholarships, programs, and opportunities.</p>
        </div>
        <div className='column is-mx-3'>
          <div className='field is-grouped'>
            <p className='control is-expanded'>
              <input className='input' type='text' placeholder='Email address'/>
            </p>
            <p className='control'>
              <a className='button btn-sub'>
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Newsletter
