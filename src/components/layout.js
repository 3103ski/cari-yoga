import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import thumbImage from '../images/door-yoga.jpg'

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
                            {
                                name: 'description',
                                content:
                                    'Yoga courses designed for everybody! Bring yourself into balance and harmony through Traditional Hatha Yoga practices',
                            },
                            { name: 'keywords', content: 'yoga' },
                            { property: 'image', content: { thumbImage } },
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
