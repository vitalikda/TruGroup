import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Layout from '../components/layouts'
// import Services from '../components/Services'
// import Testimonials from '../components/Testimonials'

// import Services from './services-page'
// import Testimonials from './testimonials-page'


export const HomePageTemplate = ({
  title,
  heading,
  description,
  meta_title,
  meta_description,
}) => (
    <Layout>
      <div>
        <Helmet>
          <title>{meta_title}</title>
          <meta name='description' content={meta_description} />
        </Helmet>
        <section className='hero is-primary is-bold'>
          <div className='hero-body'>
            <div className='container'>
              <div className='columns'>
                <div className='column is-10 is-offset-1'>
                  <div className='section'>
                    <h1 className='title'>
                      {title}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section section--gradient'>
          <div className='container'>
            <div className='section'>
              <div className='columns'>
                <div className='column is-10 is-offset-1'>
                  <div className='content'>
                    <div>
                      <h3 className='has-text-weight-semibold is-size-2'>
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                    {/* <Services /> */}
                    {/* <Testimonials /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
}

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <HomePageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      heading={frontmatter.heading}
      description={frontmatter.description}
    />
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        heading
        description
      }
    }
  }
`
