import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layouts';

const NotFoundPage = () => (
  <Layout>
    <section className='hero is-bold is-medium box-shadow'>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='title is-size-1 has-text-weight-light'>
            <span className='has-text-weight-bold'>404:</span> not found
          </h1>
          <h2 className='subtitle is-size-6'>
            You just hit a route that doesn&#39;t exist... 😅 
          </h2>
          <Link className='button is-primary'>
            <span>Let's chat </span>
            <span className='icon'>
              <i className='fas fa-comment'></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
