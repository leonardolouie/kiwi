import React from 'react'
import { Component } from 'react'
import './category-component.scss'

// eslint-disable-next-line react/display-name

class Category extends Component {
	render() {
		return (
			<div className='category-container'>
				<p className="category-header"> <span className='category-header-text'>CATEGORY</span><span className='see-more-link'>SEE MORE</span></p>
				<div className='category-item-container'>
					<div>
						<img className='category-item-photo' src='https://via.placeholder.com/150' />
						<p className='category-item-title'>How Scorned Women and a Casanova Cop</p>
						<p className='category-item-description'>“This baby was unviable, basically. That’s what they say.
            They say that the baby is ‘incompatible with life.’”</p>
						<p className='category-item-author'>BY OPHELIA AGUILAR <span className='category-item-timestamp'>• 1 DAY AGO
            			</span></p>
					</div>
					<div>
						<img className='category-item-photo' src='https://via.placeholder.com/150' />
						<p className='category-item-title'>How Scorned Women and a Casanova Cop</p>
						<p className='category-item-description'>“This baby was unviable, basically. That’s what they say.
            They say that the baby is ‘incompatible with life.’”</p>
						<p className='category-item-author'>BY OPHELIA AGUILAR <span className='category-item-timestamp'>• 1 DAY AGO
            			</span></p>
					</div>
					<div>
						<img className='category-item-photo' src='https://via.placeholder.com/150' />
						<p className='category-item-title'>How Scorned Women and a Casanova Cop</p>
						<p className='category-item-description'>“This baby was unviable, basically. That’s what they say.
            They say that the baby is ‘incompatible with life.’”</p>
						<p className='category-item-author'>BY OPHELIA AGUILAR <span className='category-item-timestamp'>• 1 DAY AGO
            			</span></p>
					</div>
					<div>
						<img className='category-item-photo' src='https://via.placeholder.com/150' />
						<p className='category-item-title'>How Scorned Women and a Casanova Cop</p>
						<p className='category-item-description'>“This baby was unviable, basically. That’s what they say.
            They say that the baby is ‘incompatible with life.’”</p>
						<p className='category-item-author'>BY OPHELIA AGUILAR <span className='category-item-timestamp'>• 1 DAY AGO
            			</span></p>
					</div>
				</div>
			</div>
		)
	}
}

export default Category
