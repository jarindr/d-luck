import { Link } from 'react-router'
import React from 'react'
import cx from 'classnames'
import styles from './NavBar.styl'
import LanguageDropdown from './languageDropdown'
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
    const classNameNav = cx([styles.navigationContainer], { [styles.active]: this.state.mobileMenu })
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
          <div className={styles.languageDropdownMobile}>
            <LanguageDropdown
              selectOptions={['TH', 'EN', 'JP', 'CN']}
              selectIndex={0}
              onChange={this.onSelectChange}
            />
          </div>
          <span className={styles.navItem}><Link to='https://kaanshow-ec4c0.firebaseapp.com'>KAAN SHOW</Link></span>
          <span className={styles.navItem} style={{ color: 'black' }}><a href='/' target='_blank'>D'LUCK</a></span>
          <span className={styles.navItem}><a href='https://punjaluck-a28c1.firebaseapp.com/' target='_blank'>PANJALUCK</a></span>
          <span className={`${styles.navItem} ${styles.languageDropdown}`}>
            <LanguageDropdown
              selectOptions={['TH', 'EN', 'JP', 'CN']}
              selectIndex={0}
              onChange={this.onSelectChange}
            />
          </span>
          <span className={styles.navItem}>
            <i className='flaticon-search'></i>
          </span>
          <Link to='/ticket/type/' target='_blank'><span className={`${styles.navItem} ${styles.ticket}`}>TICKET</span></Link>
        </div>
      </div>
    )
  }
})

module.exports = NavBar
