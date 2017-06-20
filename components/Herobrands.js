'use strict';
import React from 'react'
import Brands from './Brands'
import BrandsData from '../data/BrandsData'
import Button from './Common/Button'

const renderCTA = (buttons) => {
  return buttons.map((button) =>
    Button({
      href: button.href,
      anchor: button.anchor,
      title: button.title,
      big: button.big,
      overlay: button.overlay,
      key: button.title
    })
  )
}

const Herobrands = (props) => (
  <section className={ `hero-section hero-section--${props.layout} hero-section--${props.style}` }>
    <div className={ `hero-section__wrap hero-section__wrap--${props.layout}` }>
      <h1 className={ `hero-section__title hero-section__title--${props.layout}` } dangerouslySetInnerHTML={ {__html: props.title} }/>
      <div className={ `hero-section__action hero-section__action--${props.layout}` }>
        <p className={ `hero-section__caption hero-section__caption--${props.layout}` }>
          { props.caption }
        </p>
        { renderCTA(props.buttons) }
      </div>
    </div>
    <Brands {...BrandsData}/>
  </section>
)

export default Herobrands
