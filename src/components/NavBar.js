import { Link } from 'react-router'
import React from 'react'
import styles from './NavBar.styl'
const NavBar = React.createClass({
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.navigationLogo}>
          <Link to='/'><img src={require('../assets/images/D\'LUCK_LOGO for Website_ch_20161014.png')} /></Link>
        </div>
        <div id="hamberger-menu">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.navigationContainer}>
          <span className={styles.navItem}>KAAN SHOW</span>
          <span className={styles.navItem} style={{color: 'black'}}>D'LUCK</span>
          <span className={styles.navItem}><a href='https://punjaluck-a28c1.firebaseapp.com/'>PANJALUCK</a></span>
          <span className={styles.navItem}>LANGUAGE</span>
          <span className={styles.navItem}>
            <i className='flaticon-search'></i>
          </span>
          <a href='https://www.pandapass.asia/booking/external/5' target='_blank'><span className={`${styles.navItem} ${styles.ticket}`}>TICKET</span></a>
        </div>
      </div>
    )
  }
})

module.exports = NavBar