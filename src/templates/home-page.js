import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Layout from '../components/layouts'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'

// import Services from './services-page'
// import TestimonialsPage from './testimonials-page'


export const HomePageTemplate = ({
  title,
  heading,
  description,
  meta_title,
  meta_description,
  services,
  testimonials,
}) => (
    <Layout>
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
                  <Services gridItems={services.blurbs} />
                  <Testimonials testimonials={testimonials} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  services: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,
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
      services={data.allServices.edges[0].node.frontmatter.services}
      testimonials={data.allTestimonials.edges[0].node.frontmatter.testimonials}
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
    allServices: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "services-page" } } } 
    ) {
      edges {
        node {
          id
          frontmatter {
            services {
              blurbs {
                image
                title
                text
              }
            }
          }
        }
      }
    }
    allTestimonials: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "testimonials-page" } } } 
    ) {
      edges {
        node {
          id
          frontmatter {
            testimonials {
              author
              quote
            }
          }
        }
      }
    }
  }
`
