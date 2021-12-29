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
            {
                name: 'Blog',
                link: '/blog',
            },
        ],
    },
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-source-graphql',
            options: {
                // Arbitrary name for the remote schema Query type
                typeName: 'GraphCMS',
                // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
                fieldName: 'gcms',
                // Url to query from
                url: 'https://api-us-east-1.graphcms.com/v2/ckxnom5df57ma01xo6t62b95r/master',
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
