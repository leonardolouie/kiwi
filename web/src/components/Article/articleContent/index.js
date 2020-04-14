import React from 'react'
import { Link } from 'gatsby'
import { buildImageObj, getBlogUrl } from './../../../lib/helpers'
import { imageUrlFor } from './../../../lib/image-url'
import PortableText from './../../portableText'
import Container from './../../container'
import AuthorSocialShare from './../authorSocialShare/index'
import AuthorDetails from './../authorDetails/index'
import SocialShare from './../socialMedia/index'
import Disqus from 'disqus-react'
import SingleColumn from '../../SingleColumn/index'
import Popular from '../../Latest/Popular/index'
import './articleContent.scss'

function ArticleContent(props) {
	const { id, _rawExcerpt, _rawBody, authors, categories, title, mainImage, publishedAt } = props

	const disqusShortname = 'manila-times'
	const disqusConfig = {
		url: 'https://kiwi-studio.netlify.com/dashboard',
		identifier: id,
		title: title
	}
	return (
		<article className='article__article'>
			<Container>
				<div className='article__category'>
					{categories && (
						<div className='article_category--container'>
							<span className='article_category--link'>
								Nature
              </span>
							{/* {categories.map(category => (
                    <Link className='article_category--link' key={category._id}
                    to={getBlogUrl(props.publishedAt, props.slug.current)}>
                          {category.title}
                    </Link>
                    ))} */}
						</div>
					)}
				</div>
				<h1 className='article__title'>{title}</h1>
				<div className='article__short_description'>
					{_rawExcerpt && <PortableText blocks={_rawExcerpt} />}
				</div>
				<div className='article__author--social_media'>
					<div className='article__author--details'>
						{authors && <AuthorSocialShare items={authors} title='Authors' date={publishedAt} />}
					</div>
				</div>
				{mainImage && mainImage.asset && (
					<div className='article__image-container'>
						<img
							src={imageUrlFor(buildImageObj(mainImage))
								.height(Math.floor((9 / 16) * 1200))
								.fit('crop')
								.auto('format')
								.url()}
							alt={mainImage.alt}
							className='article__image'
						/>
						<p className='article__image--copyright'>
							Photo: Juan Pedro Dela Cruz
            </p>
					</div>
				)}
				<div className='article__article--content'>
					{_rawBody && <PortableText blocks={_rawBody} />}
				</div>

				<div className='article__article-tags'>
					{categories && (
						<div className='article__tags--container'>
							{categories.map(category => (
								<Link className='article_tags--link' key={category._id}
									to={getBlogUrl(props.publishedAt, props.slug.current)}>
									{category.title}
								</Link>
							))}
						</div>
					)}
					<SocialShare />
				</div>

				<div className='article_author--details'>
					{authors && <AuthorDetails items={authors} title='Authors' />}
				</div>
				<div className="article__disqus">
					<div className="article__disqus-popular">
						<Popular />
					</div>
					<div className="article__disqus-comments">
						<Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
					</div>
				</div>
			</Container>
			<SingleColumn />

		</article>
	)
}

export default ArticleContent
