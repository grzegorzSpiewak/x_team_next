'use strict'
import React from 'react'
import ErrorPage from './_error'
/**
 * Components
 */
import Cavalry from '../components/Cavalry'
import DevsFed from '../components/DevsFed'
import Footer from '../components/Footer'
import Head from '../components/HeadHire'
import LandingCta from '../components/LandingCta'
import Menu from '../components/Menu'
import RelSkills from '../components/RelSkills'
import TextLanding from '../components/TextLanding'
import TextPosts from '../components/TextPosts'
import TextQuotes from '../components/TextQuotes'
import Video from '../components/Video'
import VideoFilter from '../components/VideoFilter'
/**
 * Content
 */
import FooterData from '../data/FooterData'
import HireData from '../data/HireData'
import Homepage from '../data/Homepage'

export default class extends React.Component {

  render () {
    const pageQuery = this.props.url.query.title
    const pageName = pageQuery.split('-')[0]
    const PageData = HireData[pageName]
    const HireDataKeys = Object.keys(HireData)

    if ( HireDataKeys.indexOf(pageName) !== -1 ) {
      return (
        <div>
          <Head { ...PageData } />
          <div className="landing-tech">
            {
              PageData.TextLanding.hasText ? <TextLanding { ...PageData.TextLanding } /> : null
            }
            <Menu { ...Homepage.Menu } />
    
            <Video { ...Homepage.Video } />
            {
              PageData.DevsFed.hasFed ? <DevsFed { ...PageData.DevsFed } /> : <Cavalry { ...Homepage.Cavalry } />
            }
          </div>
          {
            PageData.DevQuotes.hasQuotes ? <TextQuotes { ...PageData.DevQuotes } /> : null
          }
          {
            PageData.CurrentPosts.hasPosts ? <TextPosts { ...PageData.CurrentPosts } /> : null
          }
          <RelSkills { ...PageData.Related }/>
          <LandingCta { ...PageData.LandingCta }/>
          <Footer { ...FooterData } />
        </div>
      )
    } else {
      return (
        <ErrorPage />
      )
    }
  }
}
