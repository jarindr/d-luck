import { Link } from 'react-router'
import React from 'react'
import styles from './NavBar.styl'
import cx from 'classnames'
const NavBar = React.createClass({
  getInitialState () {
    return {
      mobileMenu: false
    }
  },
  onClickHamberger () {
    this.setState({ mobileMenu: !this.state.mobileMenu })
  },
  render () {
    const classNameNav = cx([styles.navigationContainer], {[styles.active]: this.state.mobileMenu})
    return (
      <div className={styles.container}>
        <div className={styles.navigationLogo}>
          <Link to='/'><img src={require('../assets/images/D\'LUCK_LOGO for Website_ch_20161014.png')} /></Link>
        </div>
        <div id="hamberger-menu" onClick={this.onClickHamberger}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={classNameNav}>
          <span className={styles.navItem}><a target='_blank' href='https://kaanshow-ec4c0.firebaseapp.com'>KAAN SHOW</a></span>
          <span className={styles.navItem} style={{ color: 'black' }}>D'LUCK</span>
          <span className={styles.navItem}><a target='_blank' href='https://punjaluck-a28c1.firebaseapp.com/'>PANJALUCK</a></span>
          <span className={styles.navItem}>LANGUAGE</span>
          <span className={styles.navItem}>
            <i className='flaticon-search'></i>
          </span>
          <a href='https://kaanshow-ec4c0.firebaseapp.com/ticket/type/' target='_blank'><span className={`${styles.navItem} ${styles.ticket}`}>TICKET</span></a>
        </div>
      </div>
    )
  }
})

module.exports = NavBar
