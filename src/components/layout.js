import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const layoutStyle = {
  fontFamily: 'Times New Roman',
}

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query siteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Helmet>
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
      </Helmet>
      <main style={layoutStyle}>{children}</main>
    </div>
  )
}

export default Layout
