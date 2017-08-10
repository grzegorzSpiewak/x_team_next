import React from 'react'
import Link from 'next/link'
import Logo from './Common/Logo'
import Button from './Common/Button'
import cx from 'classnames'

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    }
  }

  handleClick() {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  createLinks(items) {
    return items.map((item) =>
      <li className="menu__item" role="menuitem" key={ `${item.title}` }>
        <Link href={ `${item.href}` }>
          <a title={`${item.title}`} className={ `${item.currentPage === true ? 'menu__link menu__link--current' : 'menu__link' }`}>
            { item.anchor }
          </a>
        </Link>
      </li>
    )
  }

  render() {
    return (
      <header
        className={ `${this.props.landing === true ? 'menu menu--landing' : 'menu' }`}
      >
        <div
          className="wrap"
        >
          <a
            href="/"
            className="menu__logo"
          >
            <Logo { ...this.props }/>
          </a>
          <button
            className={ `${this.props.whiteOnMobile === true ? 'menu__toggle menu__toggle--white' : 'menu__toggle'}`} onClick={ this.handleClick.bind(this) }
          >
            <span className="menu__toggle__line">menu</span></button>
          <nav
            className="menu__menubar"
          >
            <ul
              role="menubar"
              className="menu__list"
            >
              {
                this.createLinks(this.props.items)
              }
              <li className="menu__item">
               {
                 Button(this.props.button)
               }
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Menu
