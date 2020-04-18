import React, { FC } from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import { categories } from '../constants/application'
import { font, palette, space } from '../themes'

import { Head } from '../components/Head'

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
  const categorySlug: keyof typeof categories = fields.slug.split('/')[1]
  const categoryPaths = categories[categorySlug]
  const pathname = typeof window !== 'undefined' ? location.pathname : ''

  return (
    <>
      <Head title={title} description={description} slug={fields.slug} />
      <Title>{category}</Title>
      <Categories>
        {categoryPaths.map((item) => {
          const activeClass =
            (item.exact && pathname === item.path) || (!item.exact && pathname.indexOf(item.path) !== -1) ? 'active' : ''

          return (
            <li key={item.path}>
              <Item to={item.path} className={activeClass}>
                {item.title}
              </Item>
            </li>
          )
        })}
      </Categories>
      <Content dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

export default Post

const Title = styled.h2`
  margin-bottom: ${space.s}px;
  font-size: 26px;
  line-height: 1;
`
const Categories = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: ${space.s}px;
  padding-left: 10px;

  &::before {
    margin-right: 10px;
    font-size: ${font.l}px;
    content: '＞';
  }

  > li:not(:first-child) {
    margin-left: 10px;
  }
`
const Item = styled(Link)`
  display: block;
  padding: 8px 10px;
  color: ${palette.BLUE};
  font-size: ${font.l}px;
  text-decoration: none;

  &.active,
  &:hover {
    background-color: ${palette.BLUE};
    color: ${palette.BLACK};
  }
`
const Content = styled.div`
  overflow-y: scroll;
  flex: 1;
  padding-bottom: ${space.m}px;
  font-size: ${font.m}px;
  line-height: 1.8;

  h2 {
    margin-bottom: ${space.s}px;
    font-size: ${font.xl}px;
  }

  p {
    margin-bottom: ${space.s}px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`
