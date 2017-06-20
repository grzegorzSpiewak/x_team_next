'use strict'
import React from 'react'
import Link from 'next/link'
/**
 * Components
 */
import Head from '../components/Head'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Herobrands from '../components/Herobrands'
import Video from '../components/Video'
/**
 * Content
 */
import Homepage from '../data/Homepage'
import FooterData from '../data/FooterData'

export default class extends React.Component {

  render () {
    return (
      <div>
        <Head { ...Homepage.Head } />
        <Menu { ...Homepage.Menu } />
        <Herobrands { ...Homepage.Hero } />
        <Video { ...Homepage.Video } />
        <h1>This is placeholder Unleash page</h1>
        <Link href="/">
          <a>Go home</a>
        </Link>
        <Footer {...FooterData}/>
      </div>
    )
  }
}
