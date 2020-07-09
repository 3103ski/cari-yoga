import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import thumbImage from '../images/grace.jpg?'

import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {
    let content

    if (location && location.pathname === '/') {
        content = <div>{children}</div>
    } else {
        content = (
            <div id="wrapper" className="page">
                <div>{children}</div>
            </div>
        )
    }

    console.log(thumbImage)

    return (
        <StaticQuery
            query={graphql`
                query SiteTitleQuery {
                    site {
                        siteMetadata {
                            title
                        }
                    }
                }
            `}
            render={data => (
                <>
                    <Helmet
                        title={data.site.siteMetadata.title}
                        meta={[
                            { property: 'image', content: thumbImage },
                            { property: 'og:image', content: thumbImage },
                            {
                                property: 'og:description',
                                content:
                                    'Yoga courses designed for everybody! Bring yourself into balance and harmony through Traditional Hatha Yoga practices.',
                            },
                            {
                                property: 'og:url',
                                content: 'https://www.yogawithcari.com',
                            },
                            {
                                property: 'og:title',
                                content: 'Yoga With Cari',
                            },
                            { name: 'keywords', content: 'yoga' },
                            { name: 'title', content: 'Yoga With Cari' },
                        ]}
                    >
                        <html lang="en" />
                    </Helmet>
                    {content}
                </>
            )}
        />
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
