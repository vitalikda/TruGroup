import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import NavBar from '../NavBar'
import Footer from '../Footer'
import './styles.sass'
import config from '../../../meta/config'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>{config.siteTitle}</title>
      <meta name='description' content={config.siteDescription} />
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    </Helmet>
    <NavBar />
    <div>{children}</div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
