'use strict'
import React from 'react'
import Config from '../config'

const renderItems = (items) => {
  return items.map((item, i) =>
    <li className={ `brands__logo brands__logo--${ item.name }` } key={ i } >
      <img className={ `brands__logo__image` } src={`../static/images/brands/${ item.logo }`}  alt={ item.alt }/>
    </li>
  )
}

const Brands = (props) => (
  <div className="brands--hero">
    <div className="wrap">
      <h4 className="brands__title" dangerouslySetInnerHTML={ {__html: props.title} } />
      <div className={`brands--${props.theme}`}>
        <ul className="brands__logos">
          {renderItems(props.img)}
        </ul>
      </div>
    </div>
  </div>
)

export default Brands
