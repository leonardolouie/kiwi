import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../containers/layout'
import Article from '../components/Article'

export const query = graphql`
  query ArticleTemplateQuery($id: String!) {
    post: sanityArticle(id: {eq: $id}) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        ...SanityImage
        alt
      }
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: {maxDepth: 5})
      _rawBody(resolveReferences: {maxDepth: 5})
      authors {
        _key
        author {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
      }
    }
  }
`

const ArticleLongTemplate = props => {
  const {data} = props
  const article = data && data.post
  console.log('article view')
  console.log(props)

  return (
    <Layout>
      <Article id={article.id} title={article.title} authors={article.authors} categories={article.categories} mainImage={article.mainImage} publishedAt={article.publishedAt} _rawBody={article._rawBody} />
    </Layout>
  )
}

export default ArticleLongTemplate
