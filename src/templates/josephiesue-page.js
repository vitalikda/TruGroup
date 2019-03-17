import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from '../components/layouts'

export const JoePageTemplate = ({
  title,
  meta_title,
  meta_description,
  description,
  milestones,
  links,
}) => (
    <Layout>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='hero is-primary is-bold box-shadow'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <h1 className='title has-text-white'>
                  {title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <p style={{ whiteSpace: 'pre-line' }} >
                  {description}
                </p>
                {milestones.map((milestone, id) => (
                  <div key={id}>
                    <p className='has-text-weight-semibold is-size-4'>{milestone.description}</p>
                    <ul>
                      {milestone.items.map((item, id) => (
                        <li key={id}>{item}</li>
                      ))}
                    </ul>
                    <br />
                  </div>
                ))}
                {links.map((link, id) => (
                  <div key={id}>
                    <a href={link.url}>{link.description}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )

JoePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  description: PropTypes.string,
  milestones: PropTypes.shape({
    description: PropTypes.string,
    items: PropTypes.array,
  }),
  links: PropTypes.shape({
    description: PropTypes.string,
    url: PropTypes.string,
  }),
}

const JoePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <JoePageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      description={frontmatter.description}
      milestones={frontmatter.milestones}
      links={frontmatter.links}
    />
  )
}

JoePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default JoePage

export const joePageQuery = graphql`
  query JoePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        description
        milestones {
          description
          items
        }
        links {
          description
          url
        }
      }
    }
  }
`
