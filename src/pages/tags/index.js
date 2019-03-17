import React from 'react'
import { graphql } from 'gatsby'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../../components/layouts'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: { siteMetadata: { title }
    } },
}) => (
    <Layout>
      <Helmet title={`Tags | ${title}`} />
      <section className='hero is-primary is-bold box-shadow'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <h1 className='title has-text-white'>
                  Tags
                  </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container content'>
          <div className='columns'>
            <div
              className='column is-10 is-offset-1'
              style={{ marginBottom: '6rem' }}
            >
              <div className='field is-grouped is-grouped-multiline'>
                {group.map(tag => (
                  <div className='control'>
                    <div className='tags are-small has-addons'>
                      <Link
                        key={tag.fieldValue}
                        to={`/tags/${kebabCase(tag.fieldValue)}/`}
                      >
                        <span className='tag'>
                          {tag.fieldValue}
                        </span>
                        <span className='tag is-primary'>
                          {tag.totalCount}
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
