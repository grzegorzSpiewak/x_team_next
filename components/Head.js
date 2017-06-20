'use strict';
import React from 'react'
import Head from 'next/head'

const HeadElement = (props) => (
  <Head>
    <meta name="robots" content="noindex, nofollow" />
    <meta name="robots" content="noindex" />

    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>

    <title>{ props.pageTitle } · X-Team</title>

    <link rel="icon" href="/images/favicon.ico" />
    <link rel="apple-touch-icon" href="static/images/apple-touch-icon.png" />
    <meta name="description" content={`${props.metaDescription}`}/>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="canonical" href={ `https://x-team.com${props.slug}` }/>

    <meta name="twitter:card" content={ `${props.metaDescription}` }/>
    <meta name="twitter:site" content="@xteam"/>
    <meta name="twitter:title" content={ `${props.pageTitle} · X-Team` }/>
    <meta name="twitter:description" content={ `${props.metaDescription}` }/>
    <meta name="twitter:creator" content="@xteam"/>

    <meta name="twitter:image" content="static/images/x-team-social-media.jpg"/>

    <meta property="og:title" content={ `${props.pageTitle}` }/>
    <meta property="og:type" content="article"/>
    <meta property="og:url" content={ `https://x-team.com${props.slug}` }/>
    <meta property="og:image" content="static/images/x-team-social-media.jpg"/>
    <meta property="og:description" content={` ${props.metaDescription}` }/>
    <meta property="og:site_name" content="X-Team"/>
    <meta property="fb:admins" content="148617228512461"/>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:800,800i%7CRaleway:700%7CSource+Sans+Pro:300,400,700" media="all" />
  </Head>
)

export default HeadElement
