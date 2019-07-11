const _ = require('lodash')

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  let path
  // Only use MDX nodes
  if (node.internal.type === 'Md') {
    const fileNode = getNode(node.parent)
    // If the frontmatter contains a "path", use it
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'path')
    ) {
      path = `/${_.kebabCase(node.frontmatter.path)}`
    }
    // Otherwise use the title for the path
    else if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      path = `/${_.kebabCase(node.frontmatter.title)}`
    }
    createNodeField({ node, name: 'path', value: path })
    // Adds the name of "gatsby-source-filesystem" as field (in this case "projects" or "pages")
    createNodeField({ node, name: 'sourceInstanceName', value: fileNode.sourceInstanceName })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Our templates for projects and files inside /pages/*.md
  const singlePage = require.resolve('./src/templates/page.js')

  const result = await wrapper(
    graphql(`
      {
        single: allMarkdownRemark {
          nodes {
            frontmatter {
              path
            }
          }
        }
      }
    `)
  )

  result.data.single.nodes.forEach(n => {
    createPage({
      path: n.frontmatter.path,
      component: singlePage,
    })
  })
}

// Necessary changes to get gatsby-mdx and Cypress working
exports.onCreateWebpackConfig = ({ stage, actions, loaders, getConfig }) => {
  const config = getConfig()

  config.module.rules = [
    ...config.module.rules.filter(rule => String(rule.test) !== String(/\.jsx?$/)),
    {
      ...loaders.js(),
      test: /\.jsx?$/,
      exclude: modulePath => /node_modules/.test(modulePath) && !/node_modules\/gatsby-mdx/.test(modulePath),
    },
  ]

  actions.replaceWebpackConfig(config)
}
