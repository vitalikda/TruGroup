import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Contact from '../components/Contact'
import Layout from '../components/layouts'

export const ContactPageTemplate = ({
  title,
  subtitle,
  meta_title,
  meta_description,
  contacts,
}) => {
  return (
    <Layout>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='hero is-bold is-medium box-shadow'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title is-size-1 has-text-weight-light'>
              <span className='has-text-weight-bold'>{title}</span>
            </h1>
            <h2 className='subtitle is-size-6'>
              {subtitle}
            </h2>
            <div className='container'>
              {contacts.map((contact, id) =>
                <Contact key={id} address={contact.address} email={contact.email} phone={contact.phone} description={contact.description} />
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  contacts: PropTypes.array,

}

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <ContactPageTemplate
      title={frontmatter.title}
      subtitle={frontmatter.subtitle}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      contacts={frontmatter.contacts}
    />
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        meta_title
        meta_description
        heading
        contacts {
          address
          email
          phone
          description
        }
      }
    }
  }
`
