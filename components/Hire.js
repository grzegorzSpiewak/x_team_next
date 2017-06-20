'use strict';
import React from 'react'
import Button from './Common/Button'

const Hire = (props) => (
  <section className={`block hire-section hire-section--${props.picture}`}>
    <div className="hire-section__content">
      <h2 className="hire-section__title" dangerouslySetInnerHTML={ {__html: props.title} } />
      {Button({
        href: props.ctaHref,
        anchor: props.ctaAnchor,
        title: props.ctaTitle,
        style: props.ctaStyle,
        big: props.ctaBig
      })}
    </div>
  </section>
)

export default Hire
