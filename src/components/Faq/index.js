import React from 'react';
import './index.sass';


const Faq = () => (
  <section id='faq' className='section box-shadow'>
    <div className='container'>
      <div className='has-text-centered is-py-5 is-py-desktop-5'>
        <h3 className='is-size-7 has-text-weight-semibold is-uppercase'>
          Getting Started
        </h3>
        <h1 className='title is-size-4'>
          Frequently asked questions
        </h1>
      </div>
      <div className='columns is-multiline is-centered is-my-3'>
        <div className='column is-one-fifth'></div>
        <div className='column is-mx-3 is-mx-desktop-0'>
          <details>
            <summary className='is-my-3 is-mx-3'>Reque insolens in vel?</summary>
            <p>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti...</p>
          </details>
          <hr/>
          <details>
            <summary className='is-my-3 is-mx-3'>Vis rebum error graecis ea, id sit postea accusamus?</summary>
            <p>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti...</p>
          </details>
          <hr/>
          <details>
            <summary className='is-my-3 is-mx-3'>Lorem repudiandae ne nec?</summary>
            <p>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti...</p>
          </details>
          <hr/>
          <details>
            <summary className='is-my-3 is-mx-3'>Ad dicit numquam vel. Et eos iudico feugait percipitur?</summary>
            <p>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti...</p>
          </details>
          <hr/>
          <details>
            <summary className='is-my-3 is-mx-3'>Sea no dico percipitur. Fierent constituam definitiones id eum?</summary>
            <p>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti...</p>
          </details>
          <hr/>
        </div>
        <div className='column is-one-fifth'></div>
      </div>
    </div>
  </section>
)

export default Faq
