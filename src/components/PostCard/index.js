import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

class PostCard extends React.Component {

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        {posts.map(({ node: post }) => 
          <div 
            className='box is-my-3 carousel__slide' 
            key={post.id}
          >
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
    )
  }
}

PostCard.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query PostCardQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { templateKey: { eq: "article-page" } } },
        limit: 1,
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
    `}
    render={(data, count) => (
      <PostCard data={data} count={count} />
    )}
  />
)
