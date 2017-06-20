'use strict';
import React from 'react'
import Head from 'next/head'
import dateFormat from 'dateformat'

const HeadHire = (props) => (
  <Head>
    <meta name="robots" content="noindex, nofollow" />
    <meta name="robots" content="noindex" />

    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>

    <title>{`Top Dedicated ${props.tech} Developers for Hire in ${ dateFormat(new Date(), 'mmmm, yyyy')} `}</title>

    <link rel="icon" href="/images/favicon.ico" />
    <link rel="apple-touch-icon" href="static/images/apple-touch-icon.png" />
    <meta name="description" content={ `Do you need to get a ${props.tech} project done? Our experts are ready to join your team and get it across the finish line.`}/>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="canonical" href={ `/hire-${props.tech.toLowerCase()}-developers` }/>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:800,800i%7CRaleway:700%7CSource+Sans+Pro:300,400,700" media="all" />
  </Head>
)

export default HeadHire
