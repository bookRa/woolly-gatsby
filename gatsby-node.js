const path = require('path')

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions

  const result = await graphql(`
    query {
      allSanityBrand {
        edges {
          node {
            name
            id
          }
        }
      }
    }
  `)
  result.data.allSanityBrand.edges.forEach(({node}) => {
    console.log(node.id)
    createPage({
      path: node.name,
      component: path.resolve(`./src/templates/BrandPage.js`),
      context: {
        brandId: node.id,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({actions}) => {
  actions.setWebpackConfig({
    node: {fs: 'empty'},
  })
}
