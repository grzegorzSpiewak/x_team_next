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
          <a title={`${item.title}`} className={ cx('menu__link', {'menu__link--current': item.currentPage}) }>
            { item.anchor }
          </a>
        </Link>
      </li>
    )
  }

  render() {
    return (
      <header
        className={ `menu ${this.state.menuOpen ? 'body--menu-visible' : '' } `}
      >
        <div
          className="wrap"
        >
          <a
            href="/"
            className="menu__logo"
          >
            <Logo />
          </a>
          <button
            className="menu__toggle" onClick={ this.handleClick.bind(this) }
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
