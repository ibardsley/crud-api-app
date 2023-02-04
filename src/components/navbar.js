import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom'

export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary color={'red'} inverted widths={3}>
        <Menu.Item
          as={NavLink} to="/create"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink} to="/read"
          name='passwords'
          active={activeItem === 'passwords'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}