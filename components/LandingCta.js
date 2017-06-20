'use strict';
import React from 'react'
import Button from './Common/Button'

const LandingCta = (props) => (
  <section className="landing-cta">
    <div className="wrap">
      <div className="landing-cta__contents">
        <h2 className="landing-cta__title">Scale your<br />development team</h2>
        <p className="landing-cta__caption">We help you execute projects by providing trusted { props.tech } developers who can join your team and immediately start delivering high-quality code.</p>
          {
            Button({
              href: '/hire-developers/',
              anchor: props.ctaAnchor,
              title: props.ctaTitle,
              style: 'red',
              big: true
            })
          }
      </div>
    </div>
  </section>
)

export default LandingCta
