import React from 'react';
import PropTypes from 'prop-types';
import './index.sass';


const Requirements = ( {requirements} ) => (
  <section id='requirements' className='section is-paddingless box-shadow'>
    <div className='columns'>
      <div className='column column-yes is-p-5 has-text-right'>
        <div className='container is-fluid'>
          <span className='icon'>
            <img src='/icons/yes.svg'/>
          </span>
          <p className='header'>YES</p>
          <div>
            {requirements.positive.map((item, id) => (
              <p key={id}>{item}</p>
            ))}
          </div>
        </div>
      </div>
      <div className='column column-no is-p-5 has-text-left'>
        <div className='container is-fluid'>
          <span className='icon'>
            <img src='/icons/no.svg'/>
          </span>
          <p className='header'>NO</p>
          <div>
            {requirements.negative.map((item, id) => (
              <p key={id}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

Requirements.propTypes = {
  requirements: PropTypes.arrayOf(
    PropTypes.shape({
      positive: PropTypes.array,
      negative: PropTypes.array,
    })
  ),
}

export default Requirements
