import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Navbar from './navbar'
import Footer from './footer'

import '../css/layout.css'

const LayoutPane = styled.div`
  font-family: 'Times New Roman';
  display: flex;
  flex-flow: column;
  height: 100vh;
`

const ContentPane = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: column;
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
    <div
      style={{
        position: 'relative',
      }}
    >
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

        <script src="https://kit.fontawesome.com/659f724388.js" crossorigin="anonymous"></script>
      </Helmet>
      <LayoutPane>
        <Navbar menuLinks={data.site.siteMetadata.menuLinks} />
        {/* {children} */}
        <ContentPane>{children}</ContentPane>
        <Footer />
      </LayoutPane>
    </div>
  )
}

export const NoNavLayout = ({ pageTitle, children }) => {
  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <LayoutPane>{children}</LayoutPane>
    </div>
  )
}

export default Layout
