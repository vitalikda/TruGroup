import React from 'react'
import { graphql, Link } from 'gatsby'
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
      <section id='hero-image' className='hero is-medium has-bg-img box-shadow'>
        <div className='hero-body'>
          <div className='container'>
            <h3 className='is-size-7 has-text-weight-semibold is-uppercase'>
              PLAN YOUR education
            </h3>
            <h1 className='title is-size-1 has-text-weight-light'>
              Get your <span className='has-text-weight-bold'>scholarship</span>
            </h1>
            <h2 className='subtitle is-size-6'>
              Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.
            </h2>
            <Link className='button is-primary'>
              <span>Let's chat </span>
              <span className='icon'>
                <i className='fas fa-comment'></i>
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section id='universities' className='section is-small box-shadow'>
        <div className='container'>
          <div className='level'>
            <div className='level-item'>
              <img className='' src='/img/uni-mit.png' />
            </div>
            <div className='level-item'>
              <img className='' src='/img/uni-stanford.png' />
            </div>
            <div className='level-item'>
              <img className='' src='/img/uni-harvard.png' />
            </div>
            <div className='level-item'>
              <img className='' src='/img/uni-caltech.png' />
            </div>
            <div className='level-item'>
              <img className='' src='/img/uni-chicago.png' />
            </div>
          </div>
        </div>
      </section>
      <section id='features' className='section box-shadow'>
        <div className='container'>
          <div className='has-text-centered is-py-5 is-py-desktop-5'>
            <h3 className='is-size-7 has-text-weight-semibold is-uppercase'>
              ABOUT US
            </h3>
            <h1 className='title is-size-4'>
              Read our story &#38; how we can help
            </h1>
          </div>
          <div className='columns is-centered is-variable is-8 is-py-5 is-py-desktop-5'>
            <div className='column is-variable is-12-mobile is-4-tablet is-3-desktop is-3-widescreen is-4-fullhd has-text-centered'>
              <span className='icon'>
                <img src='/img/home.svg'/>
              </span>
              <hr className='spacer' />
              <p className='header'>Overview</p>
              <p>We are a global nonprofit organization for special admission and scholarship opportunities at American liberal arts universities for foreign students.</p>
            </div>
            <div className='column is-variable is-12-mobile is-4-tablet is-3-desktop is-3-widescreen is-4-fullhd has-text-centered'>
              <span className='icon'>
                <img src='/img/chat.svg'/>
              </span>
              <hr className='spacer' />
              <p className='header'>Assistance</p>
              <p>We offer admission assistance for international students and a free application to partner universities.</p>
            </div>
            <div className='column is-variable is-12-mobile is-4-tablet is-3-desktop is-3-widescreen is-4-fullhd has-text-centered'>
              <span className='icon'>
                <img src='/img/scholar.svg'/>
              </span>
              <hr className='spacer' />
              <p className='header'>Scholarship</p>
              <p>We offer a scholarship to partner universities for an undergraduate degree and admissions assistance for undergraduate, graduate, and ESL programs.</p>
            </div>
          </div>
          <div className='columns is-centered is-vcentered is-0 is-pb-5 is-py-desktop-5'>
            <div className='column is-one-fifth has-text-centered'>
              <Link className='button is-danger is-inverted'>
                Apply now
              </Link>
            </div>
            <div className='column is-one-fifth has-text-centered'>
              <div className='is-divider' data-content='OR'></div>
            </div>
            <div className='column is-one-fifth has-text-centered'>
              <Link className='button is-primary is-inverted'>
                Read more
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id='requirements' className='section is-paddingless box-shadow'>
          <div className='columns'>
            <div className='column column-yes is-p-5 has-text-right'>
              <div className='container is-fluid'>
                <span className='icon'>
                  <img src='/img/yes.svg'/>
                </span>
                <p className='header'>YES</p>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
            </div>
            <div className='column column-no is-p-5 has-text-left'>
              <div className='container is-fluid'>
                <span className='icon'>
                  <img src='/img/no.svg'/>
                </span>
                <p className='header'>NO</p>
                <p>Aliquam orci augue, finibus vitae.</p>
                <p>Aliquam orci augue, finibus vitae.</p>
                <p>Aliquam orci augue, finibus vitae.</p>
                <p>Aliquam orci augue, finibus vitae.</p>
                <p>Aliquam orci augue, finibus vitae.</p>
              </div>
            </div>
          </div>
      </section>
      <section id='blog' className='section box-shadow'>
        <div className='container'>
          <div className='has-text-centered is-py-5 is-py-desktop-5'>
            <h3 className='is-size-7 has-text-weight-semibold is-uppercase'>
              OUR RESOURCES
            </h3>
            <h1 className='title is-size-4'>
              Start reading our blog
            </h1>
          </div>
          <div className='box is-my-3'>
            <div className='columns'>
              <div className='column has-text-centered is-m-1 is-m-tablet-5'>
                <img src='/img/blog-img1.png'/>
              </div>
              <div className='column is-m-1 is-m-tablet-5'>
                <p className='header'>How to get scholarship</p>
                <p>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti. Natum petentium principes mei ea. Tota everti periculis vis ei, quas tibique pro at, eos ut decore ...</p>
                <Link className='button button-sec is-size-7 is-mt-3'>
                  <strong>Read now</strong>
                </Link>
              </div>
            </div>
          </div>
          <div className='has-text-centered is-my-5'>
            • • •
          </div>
        </div>
      </section>
      <section id='testimonials' className='section box-shadow'>
        <div className='container is-my-1 is-my-tablet-5'>
          <div className='columns is-mx-1 is-mx-tablet-5'>
            <div className='column is-mx-3'>
              <h3 className='is-size-7 has-text-weight-semibold is-uppercase'>
                TESTIMONIALS
              </h3>
              <h1 className='title is-size-4'>
                Students' quotes
              </h1>
              <p>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an.</p>
            </div>
            <div className='column is-mx-3'>
              <div className='box is-marginless is-my-3'>
                <div className='media'>
                  <div className='media-content'>
                    <div className='content is-my-4 is-mx-2 is-mx-desktop-5'>
                      <p>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.</p>
                    </div>
                  </div>
                </div>
              </div>
              <span className='image is-rounded is-mx-auto'/>
            </div>
          </div>
        </div>
      </section>
      <section id='faq' className='section box-shadow'>
        <div className='container'>
          <div className='has-text-centered is-py-5 is-py-desktop-5'>
            <h3 className='is-size-7 has-text-weight-semibold is-uppercase'>
              Getting Started
            </h3>
            <h1 className='title is-size-4'>
              Frequently asked questions
            </h1>
          </div>
          <div className='columns is-multiline is-centered is-my-3'>
            <div className='column is-one-fifth'></div>
            <div className='column is-mx-3 is-mx-desktop-0'>
              <details>
                <summary className='is-my-3 is-mx-3'>Reque insolens in vel?</summary>
                <p>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti...</p>
              </details>
              <hr/>
              <details>
                <summary className='is-my-3 is-mx-3'>Vis rebum error graecis ea, id sit postea accusamus?</summary>
                <p>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti...</p>
              </details>
              <hr/>
              <details>
                <summary className='is-my-3 is-mx-3'>Lorem repudiandae ne nec?</summary>
                <p>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti...</p>
              </details>
              <hr/>
              <details>
                <summary className='is-my-3 is-mx-3'>Ad dicit numquam vel. Et eos iudico feugait percipitur?</summary>
                <p>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti...</p>
              </details>
              <hr/>
              <details>
                <summary className='is-my-3 is-mx-3'>Sea no dico percipitur. Fierent constituam definitiones id eum?</summary>
                <p>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti...</p>
              </details>
              <hr/>
            </div>
            <div className='column is-one-fifth'></div>
          </div>
        </div>
      </section>
      <section id='get-started' className='section box-shadow'>
        <div className='container'>
          <div className='has-text-centered is-py-5 is-py-desktop-5'>
            <h3 className='is-size-7 has-text-weight-semibold is-uppercase'>
              Get YOUR degree
            </h3>
            <h1 className='title is-size-1 has-text-weight-light has-text-white'>
              Get <span className='has-text-weight-bold'>started</span> now
            </h1>
            <div className='content is-mx-auto'>
              Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.
            </div>
            <Link className='button btn-white is-mt-3'>
              <strong>Apply Now</strong>
            </Link>
          </div>
        </div>
      </section>
      <section id='newsletter' className='section box-shadow'>
        <div className='container is-my-1 is-my-tablet-5'>
          <div className='columns is-vcentered is-mx-1 is-mx-tablet-5'>
            <div className='column is-mx-3'>
              <h2 className='title is-size-6'>
                Join our not frequent newsletter
              </h2>
              <p>Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu, homero alterum.</p>
            </div>
            <div className='column is-mx-3'>
              <div className='field is-grouped'>
                <p className='control is-expanded'>
                  <input className='input' type='text' placeholder='Email address'/>
                </p>
                <p className='control'>
                  <a className='button btn-sub'>
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='footer' className='navbar is-transparent'>
        <div className='container'>
          <div className='navbar-brand'>
            <Link to='/' className='navbar-item logo is-unselectable is-size-5 has-text-centered'>
              <strong><span className='logo-item'>TRU</span>GROUP</strong>
            </Link>
          </div>

          <div className='navbar-menu'>
            <div className='navbar-end'>
              <Link className='navbar-item' to='/'>
                Home
              </Link>

              <Link className='navbar-item' to='/'>
                About us
              </Link>

              <Link className='navbar-item' to='/pricing'>
                Requirements
              </Link>

              <Link className='navbar-item' to='/about'>
                Reviews
              </Link>

              <Link className='navbar-item' to='/blog'>
                FAQ
              </Link>

              <Link className='navbar-item' to='/contact'>
                Blog
              </Link>

              <div className='navbar-item'>
                <Link className='button button-sec is-size-7'>
                  <strong>Apply Now</strong>
                </Link>
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
