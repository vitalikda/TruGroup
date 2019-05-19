import React from 'react'
import PropTypes from 'prop-types'
import './index.sass'
import Slider from 'react-slick'

const settings = {
  arrows: false,
  dots: true,
  infinite: true,
  // autoplay: true,
  // speed: 500,
  slideToShow: 2,
  slideToScroll: 1,
  swipeToSlide: true
}

const Testimonials = ({ testimonials }) => (
  <section id='testimonials' className='section box-shadow'>
    <div className='container is-my-1 is-my-tablet-5'>
      <div className='columns is-mx-1 is-mx-tablet-5'>
        <div className='column is-mx-3'>
          <h3 className='is-size-7 has-text-weight-semibold is-uppercase'>
            TESTIMONIALS
          </h3>
          <h1 className='title is-size-4'>
            Tru Supporters
          </h1>
          <p>We are always looking for students looking to study and acquire a scholarship through our program, and also to partner with High Schools to assist students to gain a great education that will help them create a successful career.</p>
        </div>
        <div className='column is-half is-mx-3'>
          <Slider {...settings}>
            {testimonials.map((testimonial, id) => (
              <div className='container is-px-1' key={id}>
                <div className='box is-marginless is-my-3'>
                  <div className='media'>
                    <div className='media-content'>
                      <div className='content is-my-4 is-mx-2 is-mx-desktop-5'>
                        <p>{testimonial.quote}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <span className='image is-rounded is-mx-auto' />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  </section>
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
