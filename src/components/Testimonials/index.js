import { Link } from 'gatsby';
import React from 'react';
import './index.sass';


const Testimonials = () => (
  <section id='testimonials' className='section box-shadow'>
    <div className='container is-my-1 is-my-tablet-5'>
      <div className='columns is-mx-1 is-mx-tablet-5'>
        <div className='column is-mx-3'>
          <h3 className='is-size-7 has-text-weight-semibold is-uppercase'>
            TESTIMONIALS
          </h3>
          <h1 className='title is-size-4'>
            Students' quotes
          </h1>
          <p>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an.</p>
        </div>
        <div className='column is-mx-3'>
          <div className='box is-marginless is-my-3'>
            <div className='media'>
              <div className='media-content'>
                <div className='content is-my-4 is-mx-2 is-mx-desktop-5'>
                  <p>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.</p>
                </div>
              </div>
            </div>
          </div>
          <span className='image is-rounded is-mx-auto'/>
          <div className='has-text-centered'>
            <Link className='icon carousel-dot'>
              <i className='fas fa-circle fa-sm'></i> 
            </Link>
            <Link className='icon carousel-dot active'>
              <i className='fas fa-circle fa-sm'></i> 
            </Link>
            <Link className='icon carousel-dot'>
              <i className='fas fa-circle fa-sm'></i> 
            </Link>
            <Link className='icon carousel-dot'>
              <i className='fas fa-circle fa-sm'></i> 
            </Link>
            <Link className='icon carousel-dot'>
              <i className='fas fa-circle fa-sm'></i> 
            </Link>
            <Link className='icon carousel-dot'>
              <i className='fas fa-circle fa-sm'></i> 
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Testimonials
