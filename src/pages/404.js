import * as React from 'react'
import { Link } from 'gatsby'

import { NoNavLayout } from '../components/layout'

// styles
const pageStyles = {
  color: '#232129',
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
  fontSize: '2.5em',
  margin: '0',
  padding: '0',
  whiteSpace: 'nowrap',
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

const linkStyle = {
  color: '#000',
}

// markup
const NotFoundPage = () => {
  return (
    <NoNavLayout pageTitle="Page Not Found">
      <div style={pageStyles}>
        <h1 style={headingStyles}>¯\_(ツ)_/¯</h1>
        <br />
        <h2 style={subHeadingStyles}>Well, This is Awkward.</h2>
        <div style={textDivStyle}>
          <p style={paragraphStyles}>It seems you've been routed to a page that doesn't exist. Huh.</p>
        </div>
        <br />
        <Link style={linkStyle} to="/">
          Go home
        </Link>
      </div>
    </NoNavLayout>
  )
}

export default NotFoundPage
