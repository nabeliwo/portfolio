module.exports = {
  siteMetadata: {
    title: 'nabeliwo.com',
    description: 'nabeliwo の全てがわかるサイト',
    author: 'nabeliwo',
    siteUrl: 'https://nabeliwo.com',
    image: 'https://nabeliwo.com/images/logo.png',
    social: {
      twitter: {
        name: 'nabeliwo',
        url: 'https://twitter.com/nabeliwo',
      },
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'nabeliwo.',
        short_name: 'nabeliwo.',
        start_url: '/?utm_source=homescreen',
        background_color: '#131816',
        theme_color: '#5ED2F9',
        display: 'standalone',
        icons: [
          {
            src: 'icons/icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: 'icons/icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: 'icons/icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'icons/icon-152x152.png',
            sizes: '152x152',
            type: 'image/png',
          },
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
  ],
}
