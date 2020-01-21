module.exports = {
    // Autoload the site metadata.
    siteMetadata: {
        title: 'Kenneth Kwakye-Gyamfi | Mobile + Web Full Stack Developer',
        description:
            'Mobile & web full stack developer; designer; and basketball fan. currently based in Accra, Ghana.',
        author: 'Kenneth Kwakye-Gyamfi',
        image: '/favicon.jpg',
        social: {
            twitter: '@cross19xx',
            fbAppId: '100009436144652'
        }
    },

    // Gatsby plugins
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/img`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Kenneth Kwakye-Gyamfi',
                short_name: 'KKG',
                start_url: '/',
                background_color: '#FFFFFF',
                theme_color: '#FFFFFF',
                display: 'minimal-ui',
                icon: 'src/img/logo.jpg' // This path is relative to the root of the site.
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-138977349-1',
                head: false
            }
        }
    ]
};
