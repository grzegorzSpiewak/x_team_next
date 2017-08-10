'use strict';
import React from 'react'
import Link from 'next/link'
import Logo from './Common/Logo'
import FooterData from '../data/FooterData'
import Brands from './Brands'
import BrandsDataGray from '../data/BrandsDataGray'

const renderItems = (items) => {
  return items.map((item, i) =>
    item.id ?
      <li className={`footer__item ${item.mobile ? 'footer__item--mobile' : ''}`} key={i}>
        <Link as={ `${item.href}` } href={ `/hire?title=${item.id}` }>
          <a className="footer__link">
            { item.title }
          </a>
        </Link>
      </li>
      :
      <li className={`footer__item ${item.mobile ? 'footer__item--mobile' : ''}`} key={i}>
        <Link href={ `${item.href}` }>
          <a className="footer__link">
            { item.title }
          </a>
        </Link>
      </li>
  )
}

const renderColumn = (items, i) => {
  return (
    <div className="footer__column" key={i}>
      <h4 className="footer__title">
        { items.title }
      </h4>
      <ul className="footer__list">
        { renderItems(items.links) }
      </ul>
    </div>
  )
}

const renderBrands = (brands) => {
  return brands.map((brand, i) =>
    <li className={ `brands__logo brands__logo--${ brand.name }` } key={i} >
      <img className="brands__logo__image" src={`../static/images/brands/${ brand.logo }`}  alt={ brand.alt }/>
    </li>
  )
}

const Footer = (props) => (
  <footer className="footer">
		<div className="wrap">
      <div className="footer__links">
        <div className="footer__column">
          <div className="footer__logo">
            <a href="/" className="footer__logo__link">
              <Logo />
            </a>
          </div>
        </div>
        { renderColumn(props.Company) }
        { renderColumn(props.Resources) }
        { renderColumn(props.Hire) }
        { renderColumn(props.Connect) }
      </div>
      <div className="footer__colophon">
        <h4 className="footer__brands__title" dangerouslySetInnerHTML={ {__html: BrandsDataGray.title} } />
        <div className="footer__brands">
          <div className="brands--gray">
            <ul className="brands_logos">
              {renderBrands(BrandsDataGray.img)}
            </ul>
          </div>
        </div>
        <address className="footer__colophon__address">
          <script>
            document.write(new Date().getFullYear())
          </script>
            &copy; All rights reserved. X-Company Pty Ltd.
        </address>
      </div>
    </div>
	</footer>
)

export default Footer
