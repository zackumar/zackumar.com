import * as React from 'react'
import Navbar from '../components/navbar'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'

// styles
const pageStyles = {
  color: '#232129',
  padding: 32,
  fontFamily: '"Montserrat" -apple-system, Roboto, sans-serif, serif',
}

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query NavQuery {
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
    <Layout pageTitle="Home">
      <div style={pageStyles}>
        <Navbar menuLinks={data.site.siteMetadata.menuLinks} />
      </div>
    </Layout>
  )
}

export default IndexPage
