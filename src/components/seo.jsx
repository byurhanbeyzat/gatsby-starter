import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const seoQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        keywords
        siteUrl
        author
        image
      }
    }
  }
`

const SEO = ({ lang, title, description, image }) => {
  const { site } = useStaticQuery(seoQuery)
  const data = site.siteMetadata

  const siteTitle = title ? `${title} | ${data.title}` : data.title
  const siteDescription = description || data.description
  const siteImage = image
    ? `${data.siteUrl}${image}`
    : `${data.siteUrl}${data.image}`

  return (
    <Helmet
      title={siteTitle}
      htmlAttributes={{ lang }}
      meta={[
        { name: 'title', content: siteTitle },
        { name: 'description', content: siteDescription },

        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: siteTitle },
        { property: 'og:description', content: siteDescription },
        { property: 'og:image', content: siteImage },

        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: siteTitle },
        { name: 'twitter:image', content: siteImage },
        { name: 'twitter:creator', content: data.author },
        { name: 'twitter:description', content: siteDescription },
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  title: ``,
  description: ``,
}

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default SEO
