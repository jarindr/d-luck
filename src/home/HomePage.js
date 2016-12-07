import Footer from '../components/Footer'
import IntroSection from './IntroSection'
import KaanGallerySection from './KaanGallerySection'
import LocationSection from './LocationSection'
import MakingTheShowSection from './MakingTheShowSection'
import React from 'react'
import SeatingPlanSection from './SeatingPlanSection'
import WorldOfKaanSection from './WorldOfKaanSection'
import { checkRectIntersection } from '../utils/intersection'
import scrollTo from 'scroll-to-element'
import styles from './HomePage.styl'
const SIDENAV = ['ABOUT<br>DLUCK', 'GALLERY', 'SEATING PLAN', 'THEATRE 360', 'FACILITIES', 'LOCATION MAP']
const MainPage = React.createClass({
  componentDidMount () {
    this.checkNavScroll()
    window.addEventListener('scroll', () => {
      this.checkNavScroll()
    })
  },
  getInitialState () {
    return {
      currentSection: 'ABOUT-DLUCK',
      navigateBySide: false
    }
  },
  checkNavScroll () {
    const scrollPosition = $(window).scrollTop()
    $(`.${styles.circle}`).each((index, el) => {
      const id = $(el).attr('data-attribute')
      const $section = $(`#${id}`)
      const top = $section.offset().top - 81 - 50
      const bottom = top + $section.outerHeight(true)
      if (bottom > scrollPosition && top < scrollPosition) {
        $(el).addClass(styles.white)
        if (!this.state.navigateBySide) {
          $(el).siblings(`.${styles.dotNavText}`).addClass(styles.show)
        } else if (this.state.navigateBySide && this.state.currentSection === id) {
          $(el).siblings(`.${styles.dotNavText}`).addClass(styles.show)
        } else {
          $(el).siblings(`.${styles.dotNavText}`).removeClass(styles.show)
        }
      } else {
        $(el).removeClass(styles.white)
        $(el).siblings(`.${styles.dotNavText}`).removeClass(styles.show)
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
    const id = text.replace(/ /g, '-').replace(/<br>/g, '-')
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
          <div ref='ABOUT DLUCK' id='ABOUT-DLUCK'>
            <IntroSection />
          </div>
          <div ref='GALLERY' id='GALLERY'>
            <KaanGallerySection />
          </div>
          <div ref='SEATING PLAN' id='SEATING-PLAN'>
            <SeatingPlanSection />
          </div>
          <div ref='THEATRE 360' id='THEATRE-360'>
            <WorldOfKaanSection />
          </div>
          <div ref='FACILITIES' id='FACILITIES'>
            <KaanGallerySection />
          </div>
          <div ref='LOCATION MAP' id='LOCATION-MAP'>
            <LocationSection />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
})

export default MainPage
