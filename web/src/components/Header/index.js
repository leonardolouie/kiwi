import React from 'react'
import './Header.scss'
import hamburger from '../../img/hamburger.png'
import close from '../../img/close.png'
import {Link} from 'gatsby'
class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isToggle: false
    }
  }

  handleToggle = (e) =>
  {
    var toggle = !this.state.isToggle;
    this.setState({isToggle:toggle});
  }
  render () {
    let active = this.state.isToggle ? 'active' : ''
    return (
      <div className='header'>
        <div className={'header-mobile-nav-container '+active}>
          <a onClick={this.handleToggle}><img src={close} className='header-logo-title-container__close' /></a>
          <a className='header-mobile-nav-container__item'>HOME</a>
          <a className='header-mobile-nav-container__item'>WORLD</a>
          <a className='header-mobile-nav-container__item'>FINANCE</a>
          <a className='header-mobile-nav-container__item'>SCIENCE</a>
          <a className='header-mobile-nav-container__item'>STYLE</a>
          <a className='header-mobile-nav-container__item'>CULTURE</a>
          <a className='header-mobile-nav-container__item'>POLITICS</a>
          <a className='header-mobile-nav-container__item'>HEALTH</a>
          <a className='header-mobile-nav-container__item'>SPORTS</a>
        </div>
        <div className='header-logo-title-container'>
          <a onClick={this.handleToggle}><img src={hamburger} className='header-logo-title-container__toggle' /></a>
          <Link to='/'><h1 className='header-logo-title-container__title'>The Manila Times</h1></Link>
        </div>
        <hr className='header-top__line' />
        <div className='header-menu-nav-container'>
          <a className='header-menu-nav-container__item'>HOME</a>
          <a className='header-menu-nav-container__item'>WORLD</a>
          <a className='header-menu-nav-container__item'>FINANCE</a>
          <a className='header-menu-nav-container__item'>SCIENCE</a>
          <a className='header-menu-nav-container__item'>STYLE</a>
          <a className='header-menu-nav-container__item'>CULTURE</a>
          <a className='header-menu-nav-container__item'>POLITICS</a>
          <a className='header-menu-nav-container__item'>HEALTH</a>
          <a className='header-menu-nav-container__item'>SPORTS</a>
        </div>
        <hr className='header-bottom__line' />
      </div>
    )
  }
}

export default Header
