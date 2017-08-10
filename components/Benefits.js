'use strict'
import React from 'react'
import Config from '../config'

const renderItems = (items) => {
  return items.map((item, i) =>
    <li className={`benefits__item benefits__item--${item.icon}`} key={i}>
      <h4 className="benefits__item__title" dangerouslySetInnerHTML={ {__html: item.title} }/>
      <p className="benefits__item__text" dangerouslySetInnerHTML={ {__html: item.text} }/>
    </li>
  )
}

const Benefits = (props) => (
  <section className="benefits">
    <div className="wrap">
      <h2 className="benefits__title" dangerouslySetInnerHTML={ {__html: props.title} } />
      <div className="benefits__content">
        <p className="benefits__intro" dangerouslySetInnerHTML={ {__html: props.text} } />
        <ul className="benefits__list">
          {renderItems(props.items)}
        </ul>
      </div>
    </div>
  </section>
)

export default Benefits
