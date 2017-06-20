'use strict'
import React from 'react'

const renderItems = (items) => {
  return items.map((item) =>
    <li className="checklist__item" key={ item.text }>
      { item.text }
    </li>
  )
}

const CheckList = (props) => (
  <section className={ `checklist checklist--${props.style}` }>
   <div className="wrap">
     <h2 className={ `checklist__title checklist__title--${props.style}` } dangerouslySetInnerHTML={ {__html: props.title} } />
     <div className={ `checklist__content checklist__content--${props.style}` }>
       <h3 className={ `checklist__content__title checklist__content__title--${props.style}` }>
         { props.itemsTitle }
       </h3>
         <ul className="checklist__list">
           { renderItems(props.items) }
         </ul>
     </div>
   </div>
 </section>
)

export default CheckList
