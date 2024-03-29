import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import SE0 from '../components/SEO'
import Disqus from '../components/Disqus'
import Share from '../components/Share'
import Layout from '../components/layouts'

export const ArticleTemplate = ({
  content,
  contentComponent,
  cover,
  meta_title,
  meta_desc,
  tags,
  title,
  slug,
}) => {
  const PostContent = contentComponent || Content

  return (
    <Layout>
      <section className='section'>
        <SE0
          title={title}
          meta_title={meta_title}
          meta_desc={meta_desc}
          cover={cover}
          slug={slug}
        />
        <div className='container content'>
          <div className='columns'>
            <div className='column is-8 is-offset-2'>
              <h1 className='title is-size-2 has-text-weight-bold is-bold-light'>
                {title}
              </h1>
              <img src={cover} alt={title} />
              <PostContent content={content} />
              {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <h4>Tags</h4>
                  <div className='tags are-small'>
                    {tags.map(tag => (
                      <span 
                        className='tag'
                        key={tag + `tag`}
                      >
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
              <hr />
              <Share
                title={title}
                slug={slug}
                excerpt={meta_desc}
              />
              <hr />
              <Disqus
                title={title}
                slug={slug}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

ArticleTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  cover: PropTypes.string,
  meta_title: PropTypes.string,
  meta_desc: PropTypes.string,
  title: PropTypes.string,
  slug: PropTypes.string,
}

const ArticlePage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <ArticleTemplate
      content={post.html}
      contentComponent={HTMLContent}
      cover={post.frontmatter.cover}
      meta_title={post.frontmatter.meta_title}
      meta_desc={post.frontmatter.meta_description}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      slug={post.fields.slug}
    />
  )
}

ArticlePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ArticlePage

export const pageQuery = graphql`
  query ArticleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
            slug
          }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        cover
        meta_title
        meta_description
        tags
      }
    }
  }
`
