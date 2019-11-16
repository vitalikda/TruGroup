import React from 'react';
import { graphql, Link } from 'gatsby';

import './index.sass';

const Tabs = () => (
  <section id='tabs' className='section box-shadow'>
    <div className='tabs is-right is-small'>
      <ul>
        <li>
          <Link to='/' activeClassName='is-active'>
            Social Responsibility
          </Link>
        </li>
        <li>
          <a
            href='http://civicenterprise.co.network/'
            activeClassName='is-active'
            target='_blank'
          >
            Charity Partner
          </a>
        </li>
        <li>
          <a
            href='http://tru.co.business/'
            activeClassName='is-active'
            target='_blank'
          >
            Corporate
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default Tabs;
