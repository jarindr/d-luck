import Modal from 'react-modal'
import React from 'react'
import styles from './SeatingPlanSection.styl'
const DATASEAT = {
  ocean: {
    key: 'ocean',
    title: 'OCEAN ZONE',
    image: require('../assets/images/ocean-map.png'),
    imageSeat: require('../assets/images/ocean-seat.png'),
    content: `ที่นั่งโซนนี้อยู่ใกล้ชิดเวทีการแสดงมากที่สุด เบาะที่นั่งมีความกว้าง 53 ซม. เหมาะสำหรับผู้ที่ต้องการรับชมการแสดงในระยะใกล้ เห็นรายละเอียดต่างๆ บนเวทีได้อย่างชัดเจน
      ทำให้คุณได้สัมผัสประสบการณ์การแสดงอย่างใกล้ชิดราวกับได้หลุดเข้าไปในโลกของการแสดงจริงๆ`,
    price: '3,000',
    link: 'http://uat-www.pandapass.asia/booking/external/5?ticketClassTypeName=Ocean'
  },
  star: {
    key: 'star',
    title: 'STAR ZONE',
    image: require('../assets/images/star-map.png'),
    imageSeat: require('../assets/images/star.png'),
    content: `นี่คือโซนพิเศษที่ดีที่สุด (VIP) เบาะที่นั่งมีความกว้างถึง 56 ซม. เป็นเบาะที่นั่งที่กว้างที่สุด ให้ความรู้สึกสะดวกสบายเวลารับชม ที่นั่งโซนนี้อยู่จุดศูนย์กลางโรงละคร
     ซึ่งเป็นตำแหน่งที่รับชมการแสดงได้ดีที่สุด  ทำให้คุณได้ชมโชว์ด้วยความประทับใจ จากมุมมองที่ยอดเยี่ยม สามารถรับชมภาพฉายบนจอขนาดใหญ่ที่ฉากหลังและพื้น
     (High Definition Projection Mapping) ได้อย่างชัดเจนที่สุด และยังเป็นจุดที่รับฟังระบบเสียงที่ได้รับการออกแบบอย่างมีประสิทธิภาพ ได้สมบูรณ์แบบที่สุดด้วย`,
    price: '4,000',
    link: 'http://uat-www.pandapass.asia/booking/external/5?ticketClassTypeName=Star'
  },
  cloud: {
    key: 'cloud',
    title: 'CLOUD ZONE',
    image: require('../assets/images/cloud-map.png'),
    imageSeat: require('../assets/images/sky-seat.png'),
    content: `ที่นั่งโซนนี้อยู่บริเวณศูนย์กลางโรงละคร มีมุมมองที่ใกล้เคียงกับ Star Zone เบาะที่นั่งมีความกว้าง 53 ซม. คุณจะได้ชมโชว์ด้วยความประทับใจในมุมมองที่ดี
    และเต็มอิ่มกับรายละเอียดต่างๆ บนเวที ทั้งระบบแสง เสียง และเทคนิคพิเศษมากมายอย่างเต็มอรรถรส`,
    price: '3,000',
    link: 'http://uat-www.pandapass.asia/booking/external/5?ticketClassTypeName=Cloud'
  },
  sky: {
    key: 'sky',
    title: 'SKY ZONE',
    image: require('../assets/images/sky-map.png'),
    imageSeat: require('../assets/images/purple-seat.png'),
    content: `ที่นั่งโซนราคาคุ้มค่านี้ อยู่ในจุดรับชมการแสดงที่ถัดออกมาจากโซนอื่นๆ เบาะที่นั่งมีความกว้าง 51 ซม. คุณจะรับชมการแสดงแบบองค์รวมได้อย่างครบอรรถรสที่สุด
    สามารถมองเห็นรายละเอียดการแสดงที่เกิดขึ้นได้ทั่วทั้งหมด พร้อมกันนี้คุณจะได้ตื่นตาตื่นใจกับฉากหลังสุดอลังการไม่แพ้โซนอื่นๆ เช่นกัน`,
    price: '2,500',
    link: 'http://uat-www.pandapass.asia/booking/external/5?ticketClassTypeName=Sky'
  }
}
const SeatingPlanSection = React.createClass({
  componentDidMount () {
    require('../assets/js/imageMap')
    $('img[usemap]').rwdImageMaps()
    Object.keys(DATASEAT).map(x => {
      const image = new Image()
      image.src = DATASEAT[x].image
    })
  },
  getInitialState () {
    return {
      current: 'all',
      isClicked: false
    }
  },
  onChangeState (state, click) {
    if (click !== 'click') {
      return (e) => {
        this.setState({isModalOpen: false, current: state})
      }
    } else {
      return (e) => {
        this.setState({ current: state, isModalOpen: true }, () => {
          if ($(window).width() < 900) {
            // $('body').css({position: 'fixed'})
          }
        })
      }
    }
  },
  closeModal () {
    $('body').css({position: 'static'})
    window.scrollTo(0, this.state.currentScroll)
  },
  renderModalPopUp (x) {
    return (
      <Modal
        isOpen={this.state.current === x.key && this.state.isModalOpen}
        onRequestClose={this.closeModal}
        className={styles.modal}
      >
        <div className={styles.modalMapContainer}>
          <img
            src={require('../assets/images/closeButton.png')}
            className={styles.closeButton}
            onClick={() => {
              $('body').css({position: 'static'})
              window.scrollTo(0, this.state.currentScroll)
              this.setState({current: 'all', isModalOpen: false})
            }}
          />
          <img
            src={require('../assets/images/closeButtonBlack.png')}
            className={styles.closeButtonResponsive}
            onClick={() => {
              $('body').css({position: 'static'})
              window.scrollTo(0, this.state.currentScroll)
              this.setState({current: 'all', isModalOpen: false})
            }}
          />
          <div className={styles.mapContainerPopUp}>
            <img src={x.image} />
          </div>
          <div className={`${styles.contentContainer} ${styles.popup}`}>
            <div className={styles.content}>
              <h1>SEATING PLAN</h1>
              <h3><img src={x.imageSeat} /> {x.title}</h3>
              <p>
              {x.content}
              </p>
              <p>ราคา {x.price} บาท</p>
              <a target='_blank' href={x.link}>
                <button type='button'>BUY TICKET</button>
              </a>
            </div>
          </div>
        </div>
      </Modal>
    )
  },
  render () {
    return (
      <div className={styles.container}>
        {Object.keys(DATASEAT).map(x => this.renderModalPopUp(DATASEAT[x]))}
        <h1 className={styles.mobileHeader}>SEATING PLAN</h1>
        <div className={styles.mapContainer}>
          <img src={require('../assets/images/map/D\'LUCK_Website (1280x800px)_03-0 Seating Plan_When Mouse Over Skyzone_r13_bo.png')} style={{opacity: this.state.current === 'sky' ? 1 : 0}} />
          <img src={require('../assets/images/map/D\'LUCK_Website (1280x800px)_03-0 Seating Plan_When Mouse Over Starzone_r13_bo.png')} style={{opacity: this.state.current === 'star' ? 1 : 0}} />
          <img src={require('../assets/images/map/D\'LUCK_Website (1280x800px)_03-0 Seating Plan_When Mouse Over Oceanzone_r13_bo.png')} style={{opacity: this.state.current === 'ocean' ? 1 : 0}} />
          <img src={require('../assets/images/map/D\'LUCK_Website (1280x800px)_03-0 Seating Plan_When Mouse Over Cloudzone_r13_bo.png')} style={{opacity: this.state.current === 'cloud' ? 1 : 0}} />
          <map name="Map" id="Map">
            <img
              src={require('../assets/images/map/D\'LUCK_Website (1280x800px)_03-0 Seating Plan_r13_bo.png')}
              useMap="#Map"
              style={{
                opacity: this.state.current === 'all' ? 1 : 0,
                zIndex: 1
              }}
              onMouseOut={this.onChangeState('all')}
            />
            <area
              shape="poly"
              coords="68,675,89,694,281,568,180,371,297,318,465,286,603,262,821,301,907,312,1028,372,956,543,1135,657,1159,612,1144,187,981,118,928,121,795,98,728,108,456,120,415,95,262,130,208,122,47,187"
              onClick={this.onChangeState('sky', 'click')}
              onMouseOver={this.onChangeState('sky')}
            />
            <area
              shape="poly"
              coords="252,481,198,371,315,319,448,294,598,274,742,291,898,317,1020,375,964,484,839,427,735,406,611,393,364,430"
              onClick={this.onChangeState('cloud', 'click')}
              onMouseOver={this.onChangeState('cloud')}
            />
            <area
              shape="poly"
              coords="253,483,352,443,461,419,605,401,718,412,856,440,958,482,928,554,726,490,494,494,294,558"
              onClick={this.onChangeState('star', 'click')}
              onMouseOver={this.onChangeState('star')}

            />
            <area
              shape="poly"
              coords="106,764,338,614,596,558,876,610,1108,777,965,929,794,821,554,793,355,868,246,926"
              onClick={this.onChangeState('ocean', 'click')}
              onMouseOver={this.onChangeState('ocean')}
            />
          </map>
        </div>
        <div className={styles.contentContainer} onMouseEnter={this.onChangeState('all')}>
          <div className={`${styles.content} ${styles.default}`}>
            <h1>SEATING PLAN</h1>
            <h2>ประเภทของที่นั่ง</h2>
            <p>
              ที่นั่งของสิงห์ดีลักษณ์ ซีเนมาติก เธียเตอร์
              ถูกแบ่งออกเป็น 4 โซน แต่ละโซนถูกตั้งชื่อโดยใช้ส่วนต่างๆ ของโลก
              แทนมุมมองของ การมองเห็น เพื่อให้คุณรู้สึกเสมือนได้ผจญภัย
              ไปในโลกใบใหม่ที่เต็มไปด้วยเรื่องราวเหนือจินตนาการ
            </p>
            <div className={styles.seatContainer} onClick={this.onChangeState('sky', 'click')}>
              <img src={require('../assets/images/purple-seat.png')} />
              Sky Zone
            </div>
            <div className={styles.seatContainer} onClick={this.onChangeState('ocean', 'click')}>
              <img src={require('../assets/images/ocean-seat.png')} />
              Ocean Zone
            </div>
            <div className={styles.seatContainer} onClick={this.onChangeState('cloud', 'click')}>
              <img src={require('../assets/images/sky-seat.png')} />
              Cloud Zone
            </div>
            <div className={styles.seatContainer} onClick={this.onChangeState('star', 'click')}>
              <img src={require('../assets/images/star.png')} />
              Star Zone
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default SeatingPlanSection
