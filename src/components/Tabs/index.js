import React from 'react'
import { graphql, Link } from 'gatsby'

import './index.sass'

const Tabs = () => (
  <section id='tabs' className='section box-shadow'>
    <div className="tabs is-right is-small">
      <ul>
        <li>
          <Link 
            to='/' 
            activeClassName='is-active'
          >
          Social Responsibility
          </Link>
        </li>
        <li>
          <Link 
            to='/contact/' 
            activeClassName='is-active'
          >
          Corporate
          </Link>
        </li>
      </ul>
    </div>
  </section>
)

export default Tabs
