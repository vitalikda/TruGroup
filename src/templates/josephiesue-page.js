import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/layouts'

export const JoePageTemplate = ({
  title,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
    <Layout>
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
              <PageContent className='content' content={content} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 

JoePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const JoePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <div>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
      </Helmet>
      <JoePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </div>
  )
}

JoePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default JoePage

export const joePageQuery = graphql`
  query JoePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_title
        meta_description
      }
    }
  }
`
