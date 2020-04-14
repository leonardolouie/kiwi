import React, {Component} from 'react'
import './headline.scss'

class Headline extends Component {
  render () {
    return (
      <div className='headline'>
        <div className='headline__image'>
          <img className='headline__image' src='https://via.placeholder.com/350x170' alt='headline-image' />
          <p className='headline__image-owner'>Photo: Jeff Brown for New York Magazine</p>
        </div>

        <div className='headline__title'>
          <h1 className='headline__title'>Where will all the traffic go?</h1>
        </div>

        <div className='headline__article'>
          <p className='headline__article-text'>
						Interstate highways running through dense city centers strangle the potential for those cities to flourish.
          </p>
          <p className='headline__article-author'>
						By Ophelia Aguilar
          </p>
        </div>
      </div>
    )
  }
}

export default Headline
