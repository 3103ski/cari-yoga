import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import thumbImage from '../images/grace.jpg'
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
                        // title={data.site.siteMetadata.title}
                        meta={[
                            // { name: 'title', content: 'Yoga With Cari' },
                            // {
                            //     name: 'description',
                            //     content:
                            //         'Yoga courses designed for everybody! Bring yourself into balance and harmony through Traditional Hatha Yoga practices.',
                            // },
                            // { name: 'keywords', content: 'yoga' },
                            { property: 'image', href: thumbImage },
                            { property: 'og:image', href: thumbImage },
                            {
                                property: 'og:description',
                                content:
                                    'Yoooga courses designed for everybody!',
                            },
                            {
                                property: 'og:url',
                                content: 'https://www.yogawithcari.com',
                            },
                            {
                                property: 'og:title',
                                content: 'Yoooga With Cari',
                            },
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
