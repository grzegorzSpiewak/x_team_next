'use strict'
import React from 'react'
import Button from './Common/Button'
import config from '../config'

const SectionCutout = (props) => (
  <section className={ `section section--${props.align}` }>
    <div className={ `section__body section__body--${props.align}` }>
      <h2 className={ `section__title` } dangerouslySetInnerHTML={ {__html: props.title} } />
      <p className={`section__copy`} dangerouslySetInnerHTML={ {__html: props.text} } />
      {Button({
        href: props.ctaHref,
        anchor: props.ctaAnchor,
        title: props.ctaTitle,
        style: props.ctaStyle,
        big: true,
        newTab: props.ctaNewTab
      })}
    </div>
    <div className={ `section__pic section__pic--${props.align}` }>
      <img className="section__pic__img" src={`static/images/${props.pic}`} alt={props.title} />
    </div>
  </section>
)

export default SectionCutout
