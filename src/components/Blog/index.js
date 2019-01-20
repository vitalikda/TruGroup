import React from 'react'
import { graphql, Link } from 'gatsby'

import './index.sass'

const Blog = () => (
  <section id='blog' className='section box-shadow'>
    <div className='container'>
      <div className='has-text-centered is-py-5 is-py-desktop-5'>
        <h3 className='is-size-7 has-text-weight-semibold is-uppercase'>
          OUR RESOURCES
        </h3>
        <h1 className='title is-size-4'>
          Start reading our blog
        </h1>
      </div>
      <div className='box is-my-3'>
        <div className='columns'>
          <div className='column has-text-centered is-m-1 is-m-tablet-5'>
            <img src='/img/blog-img1.png'/>
          </div>
          <div className='column is-m-1 is-m-tablet-5'>
            <p className='header'>How to get scholarship</p>
            <p>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti. Natum petentium principes mei ea. Tota everti periculis vis ei, quas tibique pro at, eos ut decore ...</p>
            <Link className='button button-sec is-size-7 is-mt-3'>
              <strong>Read now</strong>
            </Link>
          </div>
        </div>
      </div>
      <div className='has-text-centered is-my-5'>
        <Link className='icon carousel-dot active'>
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
  </section>
)

export default Blog
