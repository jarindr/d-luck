import Footer from '../components/Footer'
import IntroSection from './IntroSection'
import KaanGallerySection from './KaanGallerySection'
import LocationSection from './LocationSection'
import React from 'react'
import SeatingPlanSection from './SeatingPlanSection'
import { checkRectIntersection } from '../utils/intersection'
import scrollTo from 'scroll-to-element'
import styles from './HomePage.styl'
const SIDENAV = ['ABOUT<br>D\'LUCK', 'GALLERY', 'SEATING PLAN', 'FACILITIES', 'LOCATION MAP']
const MainPage = React.createClass({
  getInitialState () {
    return {
      currentSection: 'ABOUT-DLUCK',
      navigateBySide: false
    }
  },
  checkNavScroll () {
    const scrollPosition = $(window).scrollTop()
    $(`.${styles.circle}`).each((index, el) => {
      const id = $(el).attr('data-attribute').replace(/'/g, '')
      const $section = $(`#${id}`)
      const top = $section.offset().top - 81 - 50
      const bottom = top + $section.outerHeight(true)
      if (bottom > scrollPosition && top < scrollPosition) {
        $(el).addClass(styles.white)
      } else {
        $(el).removeClass(styles.white)
      }
    })
    const footerRect = $('#footer-hack')[0].getBoundingClientRect()
    const navRect = $(`.${styles.sideNavgationContainer}`)[0].getBoundingClientRect()
    const isCrashedtoFooter = checkRectIntersection(footerRect, navRect)
    if (isCrashedtoFooter) {
      $(`.${styles.sideNavgationContainer}`).css({opacity: 0})
    } else {
      $(`.${styles.sideNavgationContainer}`).css({opacity: 1})
    }
  },
  renderSideNav () {
    return (
      <div className={styles.sideNavgationContainer}>
        {SIDENAV.map((x, i) => this.renderCircle(x, i))}
      </div>
    )
  },
  onClickCircle (text, e) {
    const id = text.replace(/ /g, '-').replace(/<br>/g, '-').replace(/'/g, '')
    this.setState({currentSection: id, navigateBySide: true}, () => {
      scrollTo(`#${id}`, {
        offset: -80,
        ease: 'inOutExpo',
        duration: 1500
      })
      setTimeout(() => {
        this.setState({navigateBySide: false})
      }, 1600)
    })
  },
  renderCircle (text, i) {
    const textMarkup = () => ({__html: text})
    return (
      <div className={styles.dotNavContainer} key={i}>
        <div className={styles.dotNavText} dangerouslySetInnerHTML={textMarkup()} />
        <div className={styles.circle} data-attribute={text.replace('<br>', '-').replace(/ /g, '-')} onClick={this.onClickCircle.bind(null, text)}></div>
      </div>
    )
  },
  render () {
    return (
      <div>
        <div className={styles.container}>
          {this.renderSideNav()}
          <div id='ABOUT-DLUCK' className={styles.sectionContainer}>
            <IntroSection />
          </div>
          <div id='GALLERY' className={styles.sectionContainer}>
            <KaanGallerySection />
          </div>
          <div id='SEATING-PLAN' className={styles.sectionContainer}>
            <SeatingPlanSection />
          </div>
          <div id='FACILITIES' className={styles.sectionContainer}>
            <KaanGallerySection />
          </div>
          <div id='LOCATION-MAP' style={{backgroundColor: '#fcfcfc', height: '1500px'}} className={styles.sectionContainer}>
            <LocationSection />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
})

export default MainPage
