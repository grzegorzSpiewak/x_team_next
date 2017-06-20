'use strict';
import React from 'react'
import cx from 'classnames'
import Link from 'next/link'

const Button = (props) => {
  const classNames = cx('btn', {
    'btn--big': props.big
  })
  const mediabox = cx({
    'mediabox': props.overlay
  })
  return (
    <Link
      href={ `${props.href}` }
      key={ props.title }
    >
      <a
        title={ props.title }
        target="_blank"
        className={ `${classNames} ${mediabox} btn--${props.style}` }
      >
        { props.anchor }
      </a>
    </Link>
  )
}

export default Button
