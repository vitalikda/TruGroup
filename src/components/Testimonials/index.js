import React from 'react'
import PropTypes from 'prop-types'

const Testimonials = ({testimonials}) => (
  <div>
    {testimonials.map((testimonial, id) => (
      <article className='message is-primary' key={id}>
        <div className='message-body'>
          {testimonial.quote}
          <br />
          <br />
          <cite>{testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
)

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
}

export default Testimonials
