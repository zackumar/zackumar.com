import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

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
      <main>{children}</main>
    </div>
  )
}

export default Layout
