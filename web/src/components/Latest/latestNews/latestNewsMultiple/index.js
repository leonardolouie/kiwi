import React, { Component } from 'react'
import './latestNewsMultiple.scss'

class MultipleContent extends Component {
	render() {
		return (
			<div className='multiple-content'>
				<div className='multiple-content__article'>
					<div className='multiple-content__article-image'>
						<img className='multiple-content__article-image' src='https://via.placeholder.com/150' alt='article-image' />
					</div>
					<div className='multiple-content__article-text'>
						<h2 className='multiple-content__article-text-title' >How Scorned Women and a Casanova Cop...</h2>
						<p className='multiple-content__article-text-author' >By Ophelia Aguilar</p>
					</div>
				</div>

				<div className='multiple-content__article'>
					<div className='multiple-content__article-image'>
						<img className='multiple-content__article-image' src='https://via.placeholder.com/150' alt='article-image' />
					</div>
					<div className='multiple-content__article-text'>
						<h2 className='multiple-content__article-text-title' >How Scorned Women and a Casanova Cop...</h2>
						<p className='multiple-content__article-text-author' >By Ophelia Aguilar</p>
					</div>
				</div>

				<div className='multiple-content__article'>
					<div className='multiple-content__article-image'>
						<img className='multiple-content__article-image' src='https://via.placeholder.com/150' alt='article-image' />
					</div>
					<div className='multiple-content__article-text'>
						<h2 className='multiple-content__article-text-title' >How Scorned Women and a Casanova Cop...</h2>
						<p className='multiple-content__article-text-author' >By Ophelia Aguilar</p>
					</div>
				</div>

				<div className='multiple-content__article'>
					<div className='multiple-content__article-image'>
						<img className='multiple-content__article-image' src='https://via.placeholder.com/150' alt='article-image' />
					</div>
					<div className='multiple-content__article-text'>
						<h2 className='multiple-content__article-text-title' >How Scorned Women and a Casanova Cop...</h2>
						<p className='multiple-content__article-text-author' >By Ophelia Aguilar</p>
					</div>
				</div>
			</div>
		)
	}
}

export default MultipleContent
