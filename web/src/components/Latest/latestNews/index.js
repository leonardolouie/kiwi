import React, {Component} from 'react'
import './latest-news.scss'
import MultipleContent from './latestNewsMultiple/index'
import SingleContent from './latestNewsSingle/index'
import Header from './latestNewsHeader/index'

class LatestNews extends Component {
  render () {
    return (
      <div className='latest-news'>
        <div className='latest-news__header'>
          <Header />
        </div>

        <div className='latest-news__single-content'>
          <SingleContent />
        </div>

        <div className='latest-news__multiple-content'>
          <MultipleContent />
        </div>
      </div>
    )
  }
}

export default LatestNews
