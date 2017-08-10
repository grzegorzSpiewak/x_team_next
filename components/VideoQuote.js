'use strict';
import React from 'react'
import Link from 'next/link'

const VideoQuote = (props) => (
  <section className="video-quote">
    <div className="video-quote__body">
      <img className="video-quote__logo" src={ `${props.logo}` } alt={ `${props.alt}` }  />
      <h2 className="video-quote__title">{ props.title }</h2>
      <p className="video-quote__text">{ props.text }</p>
    </div>
    <div className="video-quote__pic">
      <img className="video-quote__pic__img" src={ `${props.image}` } alt={ `${props.alt}` } />
      <Link href={ `${props.link}` }>
        <a className="video-quote__link mediabox btn btn--play" href={ `${props.link}` }></a>
      </Link>
    </div>
  </section>
)

export default VideoQuote
