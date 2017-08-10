'use strict'
import React from 'react'
/**
 * Components
 */
import Brands from '../components/Brands'
import Benefits from '../components/Benefits'
import Head from '../components/Head'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Video from '../components/Video'
import Cavalry from '../components/Cavalry'
import VideoFilter from '../components/VideoFilter'
import VideoQuote from '../components/VideoQuote'
import CheckList from '../components/CheckList'
import SectionCutout from '../components/SectionCutout'
import SectionList from '../components/SectionList'
import Quotes from '../components/Quotes'
import Skills from '../components/Skills'
import Hire from '../components/Hire'
import Subscription from '../components/Forms/Subscription'
/**
 * Content
 */
import Homepage from '../data/Homepage'
import BrandsDataGray from '../data/BrandsDataGray'
import FooterData from '../data/FooterData'

export default class extends React.Component {

  render () {
    return (
      <div>
        <Head { ...Homepage.Head }/>
        <Menu { ...Homepage.Menu }/>
        <Hero { ...Homepage.Hero }/>
        <Video { ...Homepage.Video }/>
        <Brands { ...BrandsDataGray }/>
        <Cavalry { ...Homepage.Cavalry }/>
        <SectionList { ...Homepage.Intro }/>
        <VideoQuote { ...Homepage.VideoQuote }/>
        <Benefits { ...Homepage.Benefits }/>
        <SectionCutout { ...Homepage.Hire10Years }/>
        <SectionCutout { ...Homepage.MotivatedDevs }/>
        <SectionCutout { ...Homepage.Skills }/>
        <Subscription { ...Homepage.Subscription }/>
        <Footer { ...FooterData }/>
        <script src='../static/js/main.js' />
      </div>
    )
  }
}
