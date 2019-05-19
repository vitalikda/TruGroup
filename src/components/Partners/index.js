import React from 'react';
import PropTypes from 'prop-types';
import './index.sass';

const Partners = ({ partners }) => (
  <section id='partners' className='section is-small box-shadow'>
    <div className='container'>
      <div className='columns is-centered'>
        {partners.map((image, id) =>
          <div className='column is-variable is-12-mobile is-4-tablet is-3-desktop is-3-widescreen is-4-fullhd has-text-centered' key={id}>
            <img src={image} />
          </div>
        )}
      </div>
    </div>
  </section>
)

Partners.propTypes = {
  partners: PropTypes.array,
}

export default Partners
