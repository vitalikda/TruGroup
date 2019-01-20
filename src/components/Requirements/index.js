import React from 'react';
import './index.sass';


const Requirements = () => (
  <section id='requirements' className='section is-paddingless box-shadow'>
    <div className='columns'>
      <div className='column column-yes is-p-5 has-text-right'>
        <div className='container is-fluid'>
          <span className='icon'>
            <img src='/icons/yes.svg'/>
          </span>
          <p className='header'>YES</p>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
      </div>
      <div className='column column-no is-p-5 has-text-left'>
        <div className='container is-fluid'>
          <span className='icon'>
            <img src='/icons/no.svg'/>
          </span>
          <p className='header'>NO</p>
          <p>Aliquam orci augue, finibus vitae.</p>
          <p>Aliquam orci augue, finibus vitae.</p>
          <p>Aliquam orci augue, finibus vitae.</p>
          <p>Aliquam orci augue, finibus vitae.</p>
          <p>Aliquam orci augue, finibus vitae.</p>
        </div>
      </div>
    </div>
  </section>
)

export default Requirements
