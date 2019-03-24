import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import PostCard from '../../components/PostCard'
import Layout from '../../components/layouts'

export default class BlogPage extends Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <div>
          <Helmet>
            <title>Blog | Tru Group</title>
          </Helmet>
          <section id='blog' className='section'>
            <div className='container'>
              {posts.map(({ node: post }) =>
                <div className='box is-my-3 is-mb-5' key={post.id}>
                  <div className='columns'>
                    <div className='column has-text-centered is-m-1 is-m-tablet-5'>
                      <img src={post.frontmatter.cover} />
                    </div>
                    <div className='column is-m-1 is-m-tablet-5'>
                      <p className='header'>{post.frontmatter.title}</p>
                      <p>{post.excerpt}</p>
                      <Link
                        className='button button-sec is-size-7 is-mt-3'
                        to={post.fields.slug}
                      >
                        <strong>Read now</strong>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const blogPageQuery = graphql`
  query BlogPage {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "article-page" } } },
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            cover
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
