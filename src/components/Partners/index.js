import React from 'react';
import PropTypes from 'prop-types';
import './index.sass';

const Partners = ({ partners }) => (
  <section id='partners' className='section is-small box-shadow'>
    <div className='container'>
      <div className='level'>
        {partners.map((image, id) =>
          <div className='level-item' key={id}>
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
