import React from 'react'
import PropTypes from 'prop-types'

const Contact = ({ address, email, phone, description }) => {
  return (
    <div
      className='content'
      style={{ border: '1px solid #eaecee', padding: '2em 4em' }}>
      <address>
        {address}
        <br/>
        <br/>
        <a href={`mailto:${email}`}>{email}</a>
        <br/>
        <br/>
        <a href={`tel:${phone}`}>{phone}</a>
        <br/>
        <br/>
        {description}
        <br/>
      </address>
    </div>
  )
}

Contact.propTypes = {
  address: PropTypes.string,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default Contact
