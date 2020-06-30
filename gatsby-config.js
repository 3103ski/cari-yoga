module.exports = {
    siteMetadata: {
        title: 'Yoga With Cari',
        author: 'Bryan J',
        description: 'A landing page for Cari Woodfields yoga services',
        image: '/src/images/floor-split.jpg',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/images/chakra-2.png', // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-sass',
    ],
}
