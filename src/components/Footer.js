import { Link } from 'react-router'
import React from 'react'
import styles from './Footer.styl'
const DATA = [
  {image: require('../assets/images/footer_dummy/1.png'), mention: '@kaanshow', comment: 'this is fantastic1'},
  {image: require('../assets/images/footer_dummy/2.png'), mention: '@kaanshow', comment: 'this is fantastic2'},
  {image: require('../assets/images/footer_dummy/3.png'), mention: '@kaanshow', comment: 'this is fantastic3'},
  {image: require('../assets/images/footer_dummy/4.png'), mention: '@kaanshow', comment: 'this is fantastic4'},
  {image: require('../assets/images/footer_dummy/5.png'), mention: '@kaanshow', comment: 'this is fantastic5'},
  {image: require('../assets/images/footer_dummy/6.png'), mention: '@kaanshow', comment: 'this is fantastic6'},
  {image: require('../assets/images/footer_dummy/KAAN_Social Feed_Row2_01.png'), mention: '@kaanshow', comment: 'this is fantastic7'},
  {image: require('../assets/images/footer_dummy/KAAN_Social Feed_Row2_02.png'), mention: '@kaanshow', comment: 'this is fantastic8'},
  {image: require('../assets/images/footer_dummy/KAAN_Social Feed_Row2_03.png'), mention: '@kaanshow', comment: 'this is fantastic9'},
  {image: require('../assets/images/footer_dummy/KAAN_Social Feed_Row2_04.png'), mention: '@kaanshow', comment: 'this is fantastic10'},
  {image: require('../assets/images/footer_dummy/KAAN_Social Feed_Row2_05.png'), mention: '@kaanshow', comment: 'this is fantastic11'},
  {image: require('../assets/images/footer_dummy/KAAN_Social Feed_Row2_06.png'), mention: '@kaanshow', comment: 'this is fantastic12'}
]
const Footer = React.createClass({
  renderSocialBlock (data, i) {
    return (
      <div
        className={styles.socialBlock}
        style={{background: `url(${data.image}) center no-repeat`, backgroundSize: '102%'}}
        onClick={this.onClickSocialBlock.bind(null, i)}
        >
        <div className={styles.socialCaption}>
          <img src={require('../assets/images/ig_hover.png')} width='20' />
          <div>{data.mention}</div>
          <p>{data.comment}</p>
        </div>
      </div>
    )
  },
  onClickSocialBlock (data, e) {
    this.setState({isModalOpen: true, current: data})
  },
  getInitialState () {
    return {
      isModalOpen: false,
      current: 0
    }
  },
  onClickNext () {
    if (this.state.current + 1 > DATA.length - 1) {
      this.setState({current: 0})
    } else {
      this.setState({current: this.state.current + 1})
    }
  },
  onClickPrev () {
    if (this.state.current - 1 < 0) {
      this.setState({current: DATA.length - 1})
    } else {
      this.setState({current: this.state.current - 1})
    }
  },
  onCloseModal () {
    this.setState({isModalOpen: false})
  },
  onClickToTop () {
    $('#app').scrollTop(0)
  },
  render () {
    return (
      <div>
        <div className={styles.container} id='footer-hack'>
          <div className={styles.siteMapContact}>
            <div className={styles.siteMap}>
              <h2>SITEMAP</h2>
              <div className={styles.siteMapBlock}>
                <ul>
                  <li>KAAN SHOW</li>
                  <li><a target='_blank' href='https://kaanshow-ec4c0.firebaseapp.com/#INTRO-TO-KAAN'>INTRO TO KAAN</a></li>
                  <li><a target='_blank' href='https://kaanshow-ec4c0.firebaseapp.com/#KAAN-CLIPS'>KAAN CLIPS</a></li>
                  <li><a target='_blank' href='https://kaanshow-ec4c0.firebaseapp.com/#THE-STORY'>THE STORY</a></li>
                  <li><a target='_blank' href='https://kaanshow-ec4c0.firebaseapp.com/#WORLD-OF-KAAN'>WORLD OF KAAN</a></li>
                  <li><a target='_blank' href='https://kaanshow-ec4c0.firebaseapp.com/#KAAN-GALLERY'>KAAN GALLERY</a></li>
                  <li><a target='_blank' href='https://kaanshow-ec4c0.firebaseapp.com/#MAKING-THE-SHOW'>MAKING THE SHOW</a></li>
                </ul>
              </div>
              <div className={styles.siteMapBlock}>
                <ul>
                  <li>D'LUCK</li>
                  <li><a target='_blank' href="/#ABOUT-DLUCK">ABOUT D'LUCK</a></li>
                  <li><a target='_blank' href="/#GALLERY">GALLERY</a></li>
                  <li><a target='_blank' href="/#SEATING-PLAN">SEATING PLAN</a></li>
                  <li><a target='_blank' href="/#THEATER-360">THEATER 360º</a></li>
                  <li><a target='_blank' href="/#FACILITIES">FACILITIES</a></li>
                  <li><a target='_blank' href="/#LOCATION-MAP">LOCATION & MAP</a></li>
                </ul>
              </div>
              <div className={styles.siteMapBlock}>
                <ul>
                  <li>PANJALUCK</li>
                  <li><a target='_blank' href='https://punjaluck-a28c1.firebaseapp.com/#business-page'>OUR BUSINESS</a></li>
                  <li><a target='_blank' href='https://punjaluck-a28c1.firebaseapp.com/#vision-page'>VISION & MISSION</a></li>
                  <li><a target='_blank' href='https://punjaluck-a28c1.firebaseapp.com/#corporate-page'>CORPORATE VALUE</a></li>
                  <li><a target='_blank' href='https://punjaluck-a28c1.firebaseapp.com/#board-page'>BOARD PROFILE</a></li>
                  <li><a target='_blank' href='https://punjaluck-a28c1.firebaseapp.com/#partner-page'>OUR PARTNER</a></li>
                  <li><a target='_blank' href='https://punjaluck-a28c1.firebaseapp.com/#faq-page'>WORK WITH US</a></li>
                </ul>
              </div>
              <div className={styles.siteMapBlock}>
                <ul>
                  <li>INFO & DOWNLOAD</li>
                  <li>NEWS</li>
                  <li><a target='_blank' href='https://kaanshow-ec4c0.firebaseapp.com/info/download/'>DOWNLOAD<br />(PHOTO, FACT SHEET, CLIPS)</a></li>
                  <li><a target='_blank' href='https://kaanshow-ec4c0.firebaseapp.com/info/term/'>TERM & CONDITION</a></li>
                  <li><a target='_blank' href='https://kaanshow-ec4c0.firebaseapp.com/info/disclaimer/'>DISCLAIMER</a></li>
                  <li><a target='_blank' href='https://kaanshow-ec4c0.firebaseapp.com/info/privacy/'>PRIVACY</a></li>
                  <li><a target='_blank' href='https://kaanshow-ec4c0.firebaseapp.com/info/faq/'>FAQ</a></li>
                </ul>
              </div>
              <div className={styles.siteMapBlock}>
                <ul>
                  <li>BOOKING TICKET</li>
                  <li><a target='_blank' href='https://kaanshow-ec4c0.firebaseapp.com/ticket/type/'>PACKAGE & PROMOTION</a></li>
                </ul>
              </div>
            </div>
            <div className={styles.contact}>
               <h2>CONTACT</h2>
               <div className={styles.siteMapBlock} style={{width: '40%'}}>
                 <ul>
                   <li>CONTACT</li>
                   <li>
                     ADDRESS
                     <br />
                     <span style={{fontFamily: 'kanit', fontSize: '14px'}}>บริษัท ปัญลักษณ์ พาสุข จำกัด <br />เลขที่ 202 อาคาร เลอ คองคอร์ด <br />ห้อง 1601 ชั้น 16 ถ.รัชดาภิเษก <br />แขวงห้วยขวาง กรุงเทพฯ 10310</span>
                   </li>
                 </ul>
               </div>
              <div className={styles.siteMapBlock} style={{width: '30%'}}>
                <ul>
                  <li>PHONE</li>
                  <li>
                    +66 2 694 2007
                  </li>
                  <li>
                    +66 2 694 2008
                  </li>
                  <li className={styles.fax}>FAX</li>
                  <li>
                    +66 2 694 2009
                  </li>
                </ul>
              </div>
              <div className={styles.siteMapBlock} style={{width: '30%'}}>
                <ul>
                  <li>EMAIL</li>
                  <li>
                    CONTACT@PUNJALUCK.COM
                  </li>
                  <li className={styles.social}>
                    <img src={require('../assets/images/fb_footer.png')} />
                    <img src={require('../assets/images/ig_footer.png')} />
                    <img src={require('../assets/images/twitter_footer.png')} />
                  </li>
                </ul>
              </div>
              <div className={styles.contactFrom}>
                <ul>
                  <li>CONTACT US</li>
                  <input type='text' placeholder='Enter Your Name' />
                  <input type='text' placeholder='Enter Your Email' />
                  <textarea type='text' placeholder='Your Message'></textarea>
                  <div className={styles.sendEmail}>SEND MESSAGE</div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerBar}>
          <span>© 2017 PANJALUCK PASUK CO., LTD. ALL RIGHTS RESERVED.</span>
          <span onClick={this.onClickToTop} className={styles.toTop} style={{float: 'right', cursor: 'pointer'}}>TO THE TOP <img src={require('../assets/images/to_top.png')} style={{width: '15px', filter: 'brightness(70%)'}} /></span>
        </div>
      </div>
    )
  }
})

export default Footer
