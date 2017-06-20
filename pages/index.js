'use strict'
import React from 'react'
/**
 * Components
 */
import Head from '../components/Head'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Herobrands from '../components/Herobrands'
import Video from '../components/Video'
import Cavalry from '../components/Cavalry'
import VideoFilter from '../components/VideoFilter'
import VideoQuote from '../components/VideoQuote'
import CheckList from '../components/CheckList'
import SectionCutout from '../components/SectionCutout'
import Quotes from '../components/Quotes'
import Skills from '../components/Skills'
import Hire from '../components/Hire'
import Subscription from '../components/Forms/Subscription'
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
        <Cavalry { ...Homepage.Cavalry } />
        <VideoFilter { ...Homepage.VideoFilter } />
        <CheckList { ...Homepage.CheckList } />
        <SectionCutout { ...Homepage.Hire10Years } />
        <SectionCutout { ...Homepage.NeverStop } />
        <SectionCutout { ...Homepage.Ordinary } />
        <Skills { ...Homepage.Skills } />
        <Hire { ...Homepage.Hire } />
        <Subscription { ...Homepage.Subscription } />
        <Footer {...FooterData}/>
        <script src='../static/js/main.js' />
      </div>
    )
  }
}
