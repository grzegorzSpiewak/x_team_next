'use strict';
import React from 'react'
import cx from 'classnames'

const TextLanding = (props) => (
  <section className={`text landing-faq  ${props.style}`}>
    <div className="wrap" dangerouslySetInnerHTML={ {__html: props.text} } />
  </section>
)

export default TextLanding
