// import React from 'react'
// import PropTypes from 'prop-types'
// import { Helmet } from 'react-helmet'
// import { useLocation } from '@reach/router'
// import { useStaticQuery, graphql } from 'gatsby'

// const SEO = ({ title, description, image, article }) => {
//     const { location } = useLocation()
//     const { site } = useStaticQuery(query)

//     return null
// }

// export default SEO

// const query = graphql`
//     query SEO {
//         site {
//             siteMetadata {
//                 defaultTitle: title
//                 titleTemplate
//                 defaultDescription: description
//                 siteUrl: url
//                 defaultImage: image
//                 twitterUsername
//             }
//         }
//     }
// `

// SEO.propTypes = {
//     title: PropTypes.string,
//     description: PropTypes.string,
//     image: PropTypes.string,
//     article: PropTypes.bool,
// }

// SEO.defaultProps = {
//     title: null,
//     description: null,
//     image: null,
//     article: false,
// }
