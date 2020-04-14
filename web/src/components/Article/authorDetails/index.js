import React from 'react'
import {Link} from 'gatsby'
import {buildImageObj} from './../../../lib/helpers'
import {imageUrlFor} from './../../../lib/image-url'

import './AuthorDetails.scss'

function AuthorDetails ({items, title}) {
  console.log(items)
  return (
    <div>
      {items.map(({author, _key}) => {
        const authorName = author && author.name
        return (
          <div className='author' key={_key}>
            <hr />
            <div className='author__picture'>
              <img className='author__picture__property' src='https://via.placeholder.com/150' />
            </div>
            <div className='author__by--name'>
              <p className='author__by--name__by'>
                                WRITTEN BY
              </p>
              <p className='author__by--name__name'>
                {authorName || <em>Missing name</em>}
              </p>
            </div>
            <div className='author__description'>This is a sample description of our current author</div>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default AuthorDetails
