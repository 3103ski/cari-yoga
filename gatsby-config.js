module.exports = {
    siteMetadata: {
        url: 'https://yogawithcari.com',
        title: 'Yoggga With Cari',
        author: 'Bryan Jastrzembski',
        description: 'Do yoggga with Cari!',
        image: '/src/images/floor-split.jpg',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                // name: 'gatsby-starter-default',
                name: 'Yoga With Cariii',
                short_name: 'Cari Yogaaa',
                start_url: '/',
                background_color: '#FF5733',
                theme_color: '#663399',
                display: 'minimal-ui',
                image: 'src/images/grace.jpg', // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-sass',
    ],
}
