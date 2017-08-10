'use strict'
import React from 'react'
import Config from '../config'
import Link from 'next/link'

const renderItems = (items) => {
  return items.map((item, i) =>
   <Link href={ `${item.href}` } key={i}>
      <a href={ item.href } className="cavalry__action">
        <img src={ item.img } alt={ item.alt } className="cavalry__action__img" />
        <span className="cavalry__action__title" dangerouslySetInnerHTML={ {__html: item.title} } />
        <span className="cavalry__action__learn" dangerouslySetInnerHTML={ {__html: item.learn} } />
      </a>
    </Link>
  )
}

const Cavalry = (props) => (
  <section className="cavalry">
    <div className="wrap">
      <h2 className="cavalry__title" dangerouslySetInnerHTML={ {__html: props.title} }/>
      <p className="cavalry__intro" dangerouslySetInnerHTML={ {__html: props.intro} }/>
      <div className="cavalry__actions">
        {renderItems(props.actions)}
      </div>
    </div>
  </section>
)

export default Cavalry
