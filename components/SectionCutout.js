'use strict'
import React from 'react'
import Button from './Common/Button'

const SectionCutout = (props) => (
  <section className={ `block section section--${props.theme} section--${props.style} section--${props.image}` }>
    <div className={ `section__body section__body--${props.align}` }>
      <h2 className={ `section__title section__title--${props.theme} section__title--${props.style}` } dangerouslySetInnerHTML={ {__html: props.title} } />
      <p className={`section__copy section__copy--${props.style}`}>
        { props.text }
      </p>
      {Button({
        href: props.ctaHref,
        anchor: props.ctaAnchor,
        title: props.ctaTitle,
        style: props.ctaStyle,
        big: true,
        newTab: props.ctaNewTab
      })}
    </div>
    <div className={ `section__image section__image--${props.align} section__image--${props.style} section__image--${props.image}` }></div>
  </section>
)

export default SectionCutout
