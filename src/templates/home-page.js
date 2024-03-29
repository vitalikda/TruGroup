import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import PostCard from '../components/PostCard';
import Faq from '../components/Faq';
import Features from '../components/Features';
import GetStarted from '../components/GetStarted';
import Hero from '../components/Hero';
import Layout from '../components/layouts';
import Newsletter from '../components/Newsletter';
import Partners from '../components/Partners';
import Requirements from '../components/Requirements';
import Testimonials from '../components/Testimonials';

// import TestimonialsPage from './testimonials-page'

export const HomePageTemplate = ({
  title,
  heading,
  description,
  meta_title,
  meta_description,
  partners,
  requirements,
  testimonials,
  questions,
}) => (
    <Layout>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <Hero />
      <Partners partners={partners} />
      <Features />
      <Requirements requirements={requirements} />
      <section id='blog' className='section box-shadow'>
        <div className='container is-mb-5'>
          <div className='has-text-centered is-py-5 is-py-desktop-5'>
            <h3 className='is-size-7 has-text-weight-semibold is-uppercase'>
              OUR RESOURCES
            </h3>
            <h1 className='title is-size-4'>
              Keep updated on upcoming programs that have scholarships such as English camps or cultural trips and learn more about our scholarships and opportunities. 
            </h1>
          </div>
          <div className='columns is-centered'>
            <div className='column is-10'>
              <PostCard />
            </div>
          </div>
        </div>
      </section>
      <Testimonials testimonials={testimonials} />
      <Faq questions={questions} />
      <GetStarted />
      <Newsletter />
    </Layout>
  )

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  partners: PropTypes.array,
  requirements: PropTypes.array,
  testimonials: PropTypes.array,
  questions: PropTypes.array,
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
      partners={frontmatter.partners}
      requirements={frontmatter.requirements}
      testimonials={data.allTestimonials.edges[0].node.frontmatter.testimonials}
      questions={frontmatter.questions}
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
        partners
        requirements {
          positive
          negative
        }
        questions {
          title
          description
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
    allQuestions: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "faq-page" } } } 
    ) {
      edges {
        node {
          id
          frontmatter {
            questions {
              title
              description
            }
          }
        }
      }
    }
  }
`
