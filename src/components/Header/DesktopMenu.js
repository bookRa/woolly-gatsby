import React, {useState, useEffect} from 'react'
import {Link, withPrefix, useStaticQuery, graphql} from 'gatsby'
import {Menu, Container} from 'semantic-ui-react'
import ShoppingCartIcon from './ShoppingCartIcon'
import Logo from './Logo'

const DesktopMenu = ({location: {pathname}, cartCount}) => {
  const [activeItem, setActiveItem] = useState(pathname)
  const data = useStaticQuery(
    graphql`
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
    `,
  )

  useEffect(() => {
    setActiveItem(pathname)
  }, [pathname])

  return (
    <Menu size="huge" borderless pointing>
      <Container text>
        <Menu.Item
          active={activeItem === withPrefix('/')}
          as={Link}
          to="/"
          header
        >
          <Logo />
          Starter Store
        </Menu.Item>
        {data.allSanityBrand.edges.map(({node}) => (
          <Menu.Item key={node.id} as={Link} to={`/${node.name}/`}>
            {node.name}
          </Menu.Item>
        ))}
        <Menu.Menu position="right">
          <Menu.Item
            as={Link}
            to="/cart/"
            active={activeItem === withPrefix('/cart/')}
          >
            <ShoppingCartIcon cartCount={cartCount} name="Cart" />
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default DesktopMenu
