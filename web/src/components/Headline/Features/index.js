import React from 'react'
import './Features.scss'
import {Link} from 'gatsby'
import {format} from 'date-fns'

export default function Headline (props) {
  const {article} = props
  console.log(article)

  const renderView = article.map((item) =>
    <Link to={`/article/${format(item.node.publishedAt, 'YYYY/MM')}/${item.node.slug.current}/`}>
      <div className='news__grid' key={item.node.id} >
        <div className='news__image'>
          <img className='news__image' src={item.node.mainImage.asset.url} alt='image here' />
        </div>
        <div>
          <h3 className='feature feature__title'>{item.node.title}</h3>
          <p className='feature feature__body'>BY {item.node.authors.map((value) => (
            value.author.name
          ))}</p>
        </div>
      </div>
    </Link>
  )

  return (
    <section>
      <div className='features__grid'>
        {renderView}
        <div>
          <a className='see-all-featured'>SEE ALL FEATURED</a>
        </div>
      </div>
    </section>
  )
}
