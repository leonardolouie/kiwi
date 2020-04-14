import React, { Component } from 'React'
import './Popular.scss'

class Popular extends Component {
	render() {
		return (
			<div className='popular'>
				<h2 className='popular__header'>Popular</h2>
				<div className='popular__articles-grid'>

					<img className='grid__article-thumbnail' src='https://via.placeholder.com/270x150' />
					<div className='grid__article-description'>
						<p className='article-description__title'>ARTICLE FULL TITLE TITLE TITLE TITLE TITLE TITLE</p>
						<span className='article-description__author'>
							BY AUTHOR_NAME
            </span>
					</div>
					<img className='grid__article-thumbnail' src='https://via.placeholder.com/270x150' />
					<div className='grid__article-description'>
						<p className='article-description__title'>ARTICLE_FULL_TITLE</p>
						<span className='article-description__author'>
							BY AUTHOR_NAME
            </span>
					</div>
					<img className='grid__article-thumbnail' src='https://via.placeholder.com/270x150' />
					<div className='grid__article-description'>
						<p className='article-description__title'>ARTICLE_FULL_TITLE</p>
						<span className='article-description__author'>
							BY AUTHOR_NAME
            </span>
					</div>
				</div>
			</div>
		)
	}
}

export default Popular
