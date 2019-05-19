import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import Slider from 'react-slick'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={'slick-arrow fas fa-arrow-right is-hidden-mobile'}
      style={{ ...style, display: "block", color: "#A8B4E5", fontFamily: "Font Awesome 5 Free", fontSize: "1.5rem", position: "absolute", top: "50%", right: "-40px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={'slick-arrow fas fa-arrow-left is-hidden-mobile'}
      style={{ ...style, display: "block", color: "#A8B4E5", fontFamily: "Font Awesome 5 Free", fontSize: "1.5rem", position: "absolute", top: "50%", left: "-40px" }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinite: true,
  // autoplay: true,
  // speed: 500,
  slideToShow: 1,
  slideToScroll: 1,
  swipeToSlide: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
}

class PostCard extends React.Component {

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        <Slider {...settings}>
          {posts.map(({ node: post }) =>
            <div className='container is-px-1' key={post.id}>
              <div className='box is-my-2'>
                <div className='columns'>
                  <div className='column has-text-centered is-my-3 is-mx-2 is-mx-tablet-2'>
                    <img src={post.frontmatter.cover} />
                  </div>
                  <div className='column is-my-3 is-mx-2 is-mx-tablet-2'>
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
            </div>
          )}
        </Slider>
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
