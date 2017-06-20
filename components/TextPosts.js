'use strict'
import React from 'react'
import cx from 'classnames'
import Link from 'next/link'

const renderPosts = (items) => {
  return items.map((item) =>
    <div className="text__item text__item--post" key={ item.title }>
      <h3>
        <Link href={ item.link }>
          <a>{ item.title }</a>
        </Link>
      </h3>
      <p>{ item.text }</p>
    </div>
  )
}

const TextPosts = (props) => (
  <div className={ cx('text text--posts landing-faq', {'text text--posts--has landing-faq': props.hasPosts})}>
    <div className="wrap">
      <h2>Recent { props.tech } posts</h2>
        { renderPosts(props.posts) }
      <div className="view-more-blog">
        <Link href={`https://x-team.com/blog/tag/${props.tech}/`}>
          <a title={`${ props.tech } Blog Posts`} className="view-more-blog__link">
            More {props.tech} Posts
          </a>
        </Link>
      </div>
    </div>
  </div>
)

export default TextPosts
