module.exports = {
  siteMetadata: {
    title: "Zoe'B Homepage",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Zoe B Homepage',
        short_name: "Zoe'B",
        start_url: '/',
        background_color: '#C63B92',
        theme_color: '#C63B92',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
