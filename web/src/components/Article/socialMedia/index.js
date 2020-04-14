import React from 'react'
import {Link} from 'gatsby'
import {buildImageObj} from './../../../lib/helpers'
import {imageUrlFor} from './../../../lib/image-url'

import socialFacebook from './../../../img/share-facebook.jpg'
import socialTwitter from './../../../img/share-twitter.jpg'
import socialTT from './../../../img/share-tt.jpg'
import socialLinkedin from './../../../img/share-linkedin.jpg'
import socialPinterest from './../../../img/share-pinterest.jpg'
import socialReddit from './../../../img/share-reddit.jpg'
import socialEmail from './../../../img/share-email.jpg'

import './SocialMedia.scss'

function SocialMedia(label){
    return (
        <div className='article_social-media'>
            <div className='article__author--social-container'>
                <ul className='article__author--social-media'>
                    { label && (
                        <div className='article__fill_details'>Share</div>
                    )}
                    <li className='article_social_share-links'>
                        <span>
                            <img 
                            className='article_social_links-img'
                            src={socialFacebook} />
                        </span>
                    </li>
                    <li className='article_social_share-links'>
                        <span>
                            <img className='article_social_links-img 'src={socialTwitter} />
                        </span>
                    </li>
                    <li className='article_social_share-links'>
                        <span>
                            <img 
                            className='article_social_links-img'
                            src={socialTT} />
                        </span>
                    </li>
                    <li className='article_social_share-links'>
                        <span>
                            <img 
                            className='article_social_links-img'
                            src={socialLinkedin} />
                        </span>
                    </li>
                    <li className='article_social_share-links'>
                        <span>
                            <img 
                            className='article_social_links-img'
                            src={socialPinterest} />
                        </span>
                    </li>
                    <li className='article_social_share-links'>
                        <span>
                            <img 
                            className='article_social_links-img' src={socialReddit} />
                        </span>
                    </li>
                    <li className='article_social_share-links'>
                        <span>
                            <img 
                            className='article_social_links-img' 
                            src={socialEmail} />
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SocialMedia