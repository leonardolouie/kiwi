import React from 'react'
import {Link} from 'gatsby'
import ArticleContent from './articleContent/index'

function Article (props) {
  const {_rawBody, authors, categories, title, mainImage, publishedAt, id} = props
  console.log(props.id)
  return (
    <ArticleContent id={id} _rawBody={_rawBody} title={title} authors={authors} categories={categories} mainImage={mainImage} publishedAt={publishedAt} />

  )
}
export default Article
