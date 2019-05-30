import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (

  <StaticQuery 
    query={
      graphql`
      query PageQuery {
        allPocketArticle(sort: { fields: readWeek }) {
          edges {
            node {
              id
              url
              title
              favourite
              excerpt
              is_article
              is_index
              has_video
              has_image
              word_count
              time_read
              readWeek
              articleDomain
              domainFavicon
              image {
                item_id
                src
                width
                height
              }
            }
          }
        }
      }      
    `
  }

  render={data => (
    <Layout>

      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />



        <div className="rdwn-read-container">
          <h3 className="rdwn-read-title">Readings from around the web</h3>
          <ul className="rdwn-read-list">
            {data.allPocketArticle.edges.map(shot => (
              <li className="rdwn-read-list-block" key={shot.node.id}>
                <a className="rdwn-read-list-block_title" href={shot.node.url} rel="noopener noreferrer" target="_blank">{shot.node.title}</a>
                <p>{shot.node.excerpt}</p>
                <span className="domain">{shot.node.articleDomain}</span>
              </li>
            ))}
          </ul>
        </div>

        

    </Layout>
  )}


  />

)

export default SecondPage
