module.exports = {
    siteMetadata: {
        url: 'https://yogawithcari.com',
        title: 'Yoga With Cari',
        author: 'Bryan Jastrzembski',
        description: 'Do yoga with Cari!',
        // image: '/src/images/floor-split.jpg',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                // name: 'gatsby-starter-default',
                name: 'Yoga With ',
                short_name: 'Cari Yoga',
                start_url: '/',
                background_color: '#FF5733',
                theme_color: '#663399',
                display: 'minimal-ui',
                image: 'src/images/door-yoga.jpg', // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-sass',
    ],
}
