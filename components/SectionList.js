'use strict';
import React from 'react'
import Button from './Common/Button'
import config from '../config'

const renderItems = (items) => {
  return items.map((item, i) =>
    <div className="section__item" key={i}>
      <h4 className="section__item__title" dangerouslySetInnerHTML={ {__html: item.title} }/>
      <p className="section__item__text" dangerouslySetInnerHTML={ {__html: item.text} }/>
    </div>
  )
}

const SectionList = (props) => (
  <section className="section--list">
    <div className={ `section__pic section__pic--${props.align} section__pic--list` }>
      <img className="section__pic__img section__pic__img--list" src={`static/images/${props.pic}`} alt="${props.title}" />
    </div>
    <div className="section__items">
      {renderItems(props.items)}
    </div>
  </section>
)

export default SectionList
