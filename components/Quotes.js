'use strict'
import React from 'react'
import Button from './Common/Button'
import Config from '../config'

const renderItems = (items) => {
  return items.map((item) =>
    <li className="quotes__item" key={ item.company }>
      <blockquote className="quotes__quote">
        <p className="quotes__text">{ item.quote }</p>
        <cite className="quotes__cite">
          { item.company }
        </cite>
      </blockquote>
    </li>
  )
}

const renderRadios = (items) => {
  return items.map((item) =>
    <input type="radio" className="quotes__input" name="page" key={ item.company } />
  )
}

const Quotes = (props) => (
  <section className="quotes">
    <ol className="quotes__quotes">
      { renderRadios(props.items) }
      { renderItems(props.items) }
    </ol>
    {Button({
      href: props.ctaHref,
      anchor: props.ctaAnchor,
      title: props.ctaTitle,
      style: 'quotes',
      big: true
    })}
  </section>
)

export default Quotes
