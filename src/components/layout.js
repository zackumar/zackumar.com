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
