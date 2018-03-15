import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import {NavStyled, NavItemStyled, Border, StyledLink} from './style';

const getLinks = () => [ { label: 'Home', url: '/' }, { label: 'Woof!', url: '/dog' }, { label: 'Hello!', url: '/hello' } ]


const NavItem = ({url, label}) => {
  return (<NavItemStyled className='link' key={url}>
    <StyledLink active to={url}>{label}</StyledLink>
    <Border/>
  </NavItemStyled>);
}
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: '/',
      links: []
    }
    this.renderLinks = this.renderLinks.bind(this)
  }

  componentDidMount () {
    this.setState({
      links: getLinks()
    })
  }

  renderLinks () {
    return this.state.links.map((link) => (
      <NavItem {...link}/>
    ))
  }

  render () {
    return (
      <NavStyled>
        {this.renderLinks()}
      </NavStyled>
    )
  }
}

export default App
