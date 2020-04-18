import React, { FC } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

type Props = {
  title?: string
  description?: string
  slug?: string
  meta?: Array<{
    name: string
    content: string
  }>
}

export const Head: FC<Props> = ({ title, description, slug, meta = [] }) => (
  <StaticQuery
    query={graphql`
      query HeadQuery {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
            social {
              twitter {
                name
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const { siteMetadata } = data.site
      const metaTitle = title ? `${title} | ${siteMetadata.title}` : siteMetadata.title
      const metaDescription = description || siteMetadata.description
      const metaUrl = slug ? `${siteMetadata.siteUrl}${slug}` : siteMetadata.siteUrl

      return (
        <Helmet
          htmlAttributes={{ lang: 'ja' }}
          meta={[
            // General tags
            {
              name: 'description',
              content: metaDescription,
            },
            {
              name: 'image',
              content: siteMetadata.image,
            },

            // OpenGraph tags
            {
              name: 'og:url',
              content: metaUrl,
            },
            {
              name: 'og:site_name',
              content: siteMetadata.title,
            },
            {
              name: 'og:type',
              content: 'website',
            },
            {
              name: 'og:title',
              content: metaTitle,
            },
            {
              name: 'og:description',
              content: metaDescription,
            },
            {
              name: 'og:image',
              content: siteMetadata.image,
            },

            // Twitter Card tags
            {
              name: 'twitter:card',
              content: 'summary_large_image', // 1200px × 630px
            },
            {
              name: 'twitter:creator',
              content: `@${siteMetadata.social.twitter.name}`,
            },
            {
              name: 'twitter:title',
              content: metaTitle,
            },
            {
              name: 'twitter:description',
              content: metaDescription,
            },
            {
              name: 'twitter:image',
              content: siteMetadata.image,
            },
          ].concat(meta)}
          title={metaTitle}
          link={[
            {
              rel: 'shortcut icon',
              href: '/icons/favicon.ico',
            },
          ]}
        />
      )
    }}
  />
)
