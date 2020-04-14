import React, {Component} from 'react'
import Headline from './Headline/index'
import Features from './Features/index'
import './HeadlineFull.scss'

class HeadlineFull extends Component {
  render () {
    let article = this.props.article
    console.log(article)
    return (
      <div className='headline-full'>
        <div className='headline-full__main'>
          <Headline />
        </div>
        <div className='headline-full__side'>
          <Features article={article} />
        </div>
      </div>
    )
  }
}

export default HeadlineFull
