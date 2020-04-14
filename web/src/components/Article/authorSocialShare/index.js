import React from 'react'
import {Link} from 'gatsby'
import {buildImageObj} from './../../../lib/helpers'
import {imageUrlFor} from './../../../lib/image-url'
import {format, distanceInWords, differenceInDays} from 'date-fns'

import SocialShare from './../socialMedia/index'

import './authorSocialShare.scss'
import {randomBytes} from 'crypto'

function AuthorSocialShare ({items, title, date}) {
  return (
    <div className='article_author--social-share-parent'>
      {items.map(({author}) => {
        const authorName = author && author.name
        return (
          <div className='article_author--social-share' key={author.id + Math.random()}>
            <div className='article__author--details'>
              <div className='article_author--container'>
                <span className='article__fill_details'>By</span>
                <span className='article__author--name'>
                  <p>
                    {authorName || <em>Missing name</em>}
                  </p>
                </span>
              </div>
              <div className='article_date--container'>
                <span className='article__fill_details'>On</span>
                <span className='article_publish--container'>
                  {date && (
                    <span className='article_date-publish'>
                      {differenceInDays(new Date(date), new Date()) > 3
                        ? distanceInWords(new Date(date), new Date())
                        : format(new Date(date), 'MM/d/YY hh:mm a')}
                    </span>
                  )}
                </span>
              </div>
            </div>
            <div className='article__social-share'>
              <SocialShare label />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AuthorSocialShare
