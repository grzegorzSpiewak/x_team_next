import React from 'react'
import Button from './Common/Button'
import dateFormat from 'dateformat'
import config from '../config'

const renderNews = (items) => {
  return items.map((item) =>
    <li className="unleash-feed__item unleash-feed__item--devs" itemProp="award" key={ item.label }>
      <div className={`unleash-feed__avatar unleash-feed__avatar--devs unleash-feed__avatar--dev--${item.badge}`}/>
      <div className="unleash-feed__info unleash-feed__info--devs">
        <span className="unleash-feed__update unleash-feed__update--devs">
          { item.status }
          <span className="unleash-feed__label unleash-feed__label--devs">
            { item.label }
          </span>
      </span>
    </div>
  </li>
  )
}

const renderDevs = (devs) => {
  return devs.map((dev) =>
    <article className="cavalry__item cavalry__item--devs" key={ dev.name }>
      <ul className="cavalry__item__list cavalry__item__list--devs" itemScope itemType="http://schema.org/Person">
        <li className="cavalry__item__pic cavalry__item__pic--devs">
          <a className="cavalry__item__pic__link" href={ `${dev.link || '#'}` } target="_blank">
            <img src={ `../static/images/devs/${dev.pic}`} alt={ `${dev.name}` } className="cavalry__item__pic__img cavalry__item__pic__img--devs" itemProp="image" />
          </a>
        </li>
        <li className="cavalry__item__title cavalry__item__title--devs" itemProp="name">
          <a className="cavalry__item__link" href={`${dev.link || '#'}`} target="_blank">
            { dev.name }
          </a>
        </li>
        { renderNews(dev.news) }
      </ul>
    </article>
  )
}

const DevsFed = (props) => (
  <section className="block cavalry cavalry--devs">
    <div className="wrap">
      <h2 className="skills__title cavalry--devs__title">Top { props.tech } Developers of { dateFormat(new Date(), 'mmmm yyyy') }</h2>
      <p className="skills__subtitle cavalry--devs__subtitle">
        Hire dedicated { props.tech } developers who are motivated to always be growing and moving forward.
        <br />
        Check out how a few of our { props.tech } programmers have grown recently:
      </p>
      <div className="cavalry__items">
        { renderDevs(props.devs) }
      </div>
      <div className="cavalry__cta cavalry__cta--devs">
        { Button(props.button) }
      </div>
    </div>
  </section>
)

export default DevsFed
