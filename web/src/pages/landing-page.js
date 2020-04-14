import React from 'react'
import { graphql } from 'gatsby'

import Container from '../components/container'
import Layout from '../components/layout'
import Headline from '../components/Headline/index'
import Subscribe from '../components/SingleColumn/index'
import Latest from '../components/Latest/index'
import Category from '../components/category-component/category-component';

export const query = graphql`
{
  article : allSanityArticle(limit: 5) {
    edges {
      node {
        id
        publishedAt
        categories {
          _id
          title
        }
        title
        slug {
          current
        }
        authors {
          _key
          author {
            image {
              crop {
                _key
                _type
                top
                bottom
                left
                right
              }
              hotspot {
                _key
                _type
                x
                y
                height
                width
              }
              asset {
                _id
                url
              }
            }
            name
          }
        }
        mainImage {
          asset {
            url
            _id
          }
          alt
        }
      }
    }
  }
}`

class LandingPage extends React.Component {
	render() {
		let { data } = this.props
		let article = data.article.edges
		return (
			<Layout>
				<Container>
					<Headline article={article} />
					<Subscribe />
					<Latest />
					<Category />
				</Container>
			</Layout>

		)
	}
}

export default LandingPage
