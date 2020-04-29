import React from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'

export default ({data, location}) => {
  console.log('DATA!')
  console.log(data.allSanityFootwear.nodes)
  return (
    <Layout location={location}>
      {data.allSanityFootwear.nodes.map(node => {
        return (
          <div key={node.id}>
            <h1>{node.name}</h1>
            <h3>{node.description}</h3>
            <Img fluid={node.images[0].asset.fluid} />
          </div>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allSanityFootwear {
      nodes {
        brand {
          name
        }
        name
        sizes
        images {
          asset {
            fluid(maxWidth: 100) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
