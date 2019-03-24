import React from 'react';
import PropTypes from 'prop-types'
import './index.sass';


const Faq = ({ questions }) => (
  <section id='faq' className='section box-shadow'>
    <div className='container'>
      <div className='has-text-centered is-py-5 is-py-desktop-5'>
        <h3 className='is-size-7 has-text-weight-semibold is-uppercase'>
          GETTING MORE INFO
        </h3>
        <h1 className='title is-size-4'>
          Frequently asked questions
        </h1>
      </div>
      <div className='columns is-centered is-my-3'>
        <div className='column is-8 is-mx-3'>
          {questions.map((questions, id) => (
            <div key={id}>
              <details>
                <summary className='is-my-3 is-mx-3'>{questions.title}</summary>
                <p>{questions.description}</p>
              </details>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

Faq.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
}

export default Faq
