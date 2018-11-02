import React from 'react'
import PropTypes from 'prop-types'
import { TestimonialsPageTemplate } from '../../templates/testimonials-page'

const TestimonialsPagePreview = ({ entry, getAsset }) => {
  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  return (
    <TestimonialsPageTemplate
      title={entry.getIn(['data', 'title'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      testimonials={testimonials}
    />
  )
}

TestimonialsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default TestimonialsPagePreview
