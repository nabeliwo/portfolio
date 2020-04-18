import React, { FC } from 'react'
import { graphql } from 'gatsby'

import { MainLayout } from '../components/MainLayout'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        category
      }
      fields {
        slug
      }
    }
  }
`

const Post: FC<any> = ({ data }) => {
  const { frontmatter, html, fields } = data.markdownRemark
  const { title, description, category } = frontmatter

  return <MainLayout title={title} description={description} category={category} slug={fields.slug} html={html} />
}

export default Post
