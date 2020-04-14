import React, {Component} from 'react'
import './Latest.scss'
import Popular from './Popular/index'
import LatestNews from './latestNews/index'

class Latest extends Component {
  render () {
    return (
      <div className='news'>
        <div className='news__latest'>
          <LatestNews />
        </div>
        <div className='news__popular'>
          <Popular />
        </div>
      </div>
    )
  }
}

export default Latest
