import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Nav from '../components/nav'
import Github from '../components/github'
import Books from '../components/books'
import Footer from '../components/footer'
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

      <div className="rdwn-grid-container">

        <Nav />

        <div className="rdwn-read-container">
          <h3 className="rdwn-read-title">Things I recently read</h3>
          <ul className="rdwn-read-list">
            {data.allPocketArticle.edges.map(shot => (
              <li className="rdwn-read-list-block" key={shot.node.id}>
                <a className="rdwn-read-list-block_title" href={shot.node.url} rel="noopener noreferrer" target="_blank">{shot.node.title}</a>
              </li>
            ))}
          </ul>
        </div>


        <div className="rdwn-sidebar">
          <Github />
          <Books />
          <Footer />  
        </div>  

        
      </div>
    </Layout>
  )}


  />

)

export default SecondPage
