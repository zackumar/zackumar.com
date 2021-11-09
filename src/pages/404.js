import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import '../css/typography.css'

// styles
const pageStyles = {
  color: '#232129',
  fontFamily: '"Montserrat"',
  position: 'absolute',
  top: '50%',
  left: '50%',
  msTransform: 'translateX(-50%) translateY(-50%)',
  WebkitTransform: 'translate(-50%,-50%)',
  transform: 'translate(-50%,-50%)',

  textAlign: 'center',
}
const headingStyles = {
  fontWeight: 'bold',
  fontSize: '2em',
}

const subHeadingStyles = {
  fontWeight: 'bold',
  fontSize: '1.5em',
}

const textDivStyle = {
  maxWidth: '300px',
}

const paragraphStyles = {
  fontSize: '1.125em',
}

// markup
const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <main style={pageStyles}>
      <Helmet>
        <title>Page Not Found | {data.site.siteMetadata.title}</title>
      </Helmet>
      <h1 style={headingStyles}>*SHRUG*</h1>
      <br />
      <h2 style={subHeadingStyles}>Well. This is Awkward</h2>
      <div style={textDivStyle}>
        <p style={paragraphStyles}>It seems you've been routed to a page that doesn't exist. Huh.</p>
      </div>
      <br />
      <Link to="/">Go home</Link>.
    </main>
  )
}

export default NotFoundPage
