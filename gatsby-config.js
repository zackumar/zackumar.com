require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.zackumar.com',
        title: 'Zack Umar',
        menuLinks: [
            {
                name: 'About',
                link: '/#about',
            },
            {
                name: 'Resume',
                link: '/resume',
            },
            {
                name: 'Projects',
                link: '/#projects',
            },
        ],
    },
    plugins: [
        'gatsby-plugin-typescript',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `p0kfglvr6ppk`,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },

        'gatsby-plugin-robots-txt',
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://www.zackumar.com',
                sitemap: 'https://www.zackumar.com/sitemap/sitemap-index.xml',
                policy: [{ userAgent: '*', allow: '/' }],
            },
        },

        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
        'gatsby-plugin-mdx',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
    ],
}
