import React from 'react'
import PropTypes from 'prop-types'

const Services = ({ gridItems }) => (
  <div className='columns is-multiline'>
    {gridItems.map(item => (
      <div key={item.image} className='column is-6' style={{borderRadius: '5px'}}>
        <section className='section'>
          <p className='has-text-centered'>
            <img alt='' src={item.image} />
          </p>
          <h2 className='has-text-weight-semibold is-size-3'>{item.title}</h2>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

Services.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
      title: PropTypes.string,
    })
  ),
}

export default Services
