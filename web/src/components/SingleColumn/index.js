import React, {Component} from 'react'
import './SingleColumn.scss'

class SingleColumn extends Component {
  render () {
    return (
      <div className='single-column'>
        <div className='single-column__text'>
          <h2 className='single-column__text-header'>Never Miss Anything</h2>
          <p className='single-column__text-subheader'>Expert picks and exclusive deals, in your inbox</p>
        </div>

        <div className='single-column__form'>
          <form action='#' method=''>
            <input className='single-column__form-email' type='email' placeholder='Your Email Address' />
            <button className='single-column__form-button'>Subscribe</button>
          </form>
        </div>
      </div>
    )
  }
}

export default SingleColumn
