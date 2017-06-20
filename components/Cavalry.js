'use strict'
import React from 'react'
import Config from '../config'

const renderItems = (items) => {
  return items.map((item) =>
    <article className="cavalry__item" key={ item.title }>
      <ul className="cavalry__item__list">
        <li className="cavalry__item__pic">
          <img src={ `../static/images/${item.pic}` } alt="" className="cavalry__item__pic__img" />
        </li>
        <li className="cavalry__item__icon__wrap">
          <span className={ `cavalry__item__icon cavalry__item__icon--${item.icon}` }></span>
        </li>
        <li className="cavalry__item__title">{ item.title }</li>
        <li className="cavalry__item__text" dangerouslySetInnerHTML={ {__html: item.text} } />
      </ul>
    </article>
  )
}

const Cavalry = (props) => (
  <section className="block cavalry">
    <div className="wrap">
      <h2 className="cavalry__title" dangerouslySetInnerHTML={ {__html: props.title} } />
      <div className="cavalry__items">
        { renderItems(props.items) }
      </div>
    </div>
  </section>
)

export default Cavalry
