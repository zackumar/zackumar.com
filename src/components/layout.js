import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import Navbar from './navbar'

import '../css/layout.css'

const layoutStyle = {
  fontFamily: 'Times New Roman',
}

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query siteTitleQuery {
      site {
        siteMetadata {
          menuLinks {
            link
            name
          }
          title
        }
      }
    }
  `)

  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <Helmet>
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
      </Helmet>
      <main style={layoutStyle}>
        <Navbar menuLinks={data.site.siteMetadata.menuLinks} />
        {children}
      </main>
    </div>
  )
}

export const NoNavLayout = ({ pageTitle, children }) => {
  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <main style={layoutStyle}>{children}</main>
    </div>
  )
}

export default Layout
