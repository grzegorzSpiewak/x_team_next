'use strict';
import React from 'react'
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

const Hero = (props) => (
  <section className="hero hero--with-bg">
    <div className={ `hero__wrap hero__wrap--${props.align}` }>
      <h1 className="hero__title" dangerouslySetInnerHTML={ {__html: props.title} } />
      <div className="hero__action">
        <h2 className="hero__caption" dangerouslySetInnerHTML={ {__html: props.caption} } />
        {renderCTA(props.buttons)}
      </div>
    </div>
  </section>
)

export default Hero
