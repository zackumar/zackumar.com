import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import Navbar from './navbar'
import styled from 'styled-components'

import '../css/layout.css'

const MainPane = styled.div`
  font-family: 'Times New Roman';
  display: flex;
  flex-flow: column;
  height: 100vh;
`

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
    <div>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>

        <meta charset="utf-8" />
        <meta name="description" content="Hi, I'm Zack Umar. I code things sometimes." />
        <meta name="keywords" content="Zack Umar, Umar, Zack" />
        <meta name="author" content="Zack Umar" />
        <meta name="language" content="English" />
      </Helmet>
      <MainPane>
        <Navbar menuLinks={data.site.siteMetadata.menuLinks} />
        {children}
      </MainPane>
    </div>
  )
}

export const NoNavLayout = ({ pageTitle, children }) => {
  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <MainPane>{children}</MainPane>
    </div>
  )
}

export default Layout
