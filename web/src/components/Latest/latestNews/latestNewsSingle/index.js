import React, {Component} from 'react'
import './latestNewsSingle.scss'

class SingleContent extends Component {
  render () {
    return (
      <div className='single-content'>
        <div className='single-content__image'>
          <img className='single-content__image' src='https://via.placeholder.com/350x150' alt='article-image' />
        </div>
        <div className='single-content__text'>
          <h2 className='single-content__text-title' >How Scorned Women and a Casanova Cop...</h2>
          <p className='single-content__text-paragraph' >Paul Gonzales scammed his online dates into buying him expensive dinners. Then they made him pay.</p>
          <p className='single-content__text-author' >By Ophelia Aguilar <span className='single-content__text-author-hours'> • 4 hours ago</span></p>
        </div>
      </div>
    )
  }
}

export default SingleContent
