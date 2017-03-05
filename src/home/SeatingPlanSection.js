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
    content: `่นั่งโซนนี้อยู่บริเวณศูนย์กลางโรงละคร มีมุมมองที่ใกล้เคียงกับ Star Zone เบาะที่นั่งมีความกว้าง 53 ซม. คุณจะได้ชมโชว์ด้วยความประทับใจในมุมมองที่ดี
    และเต็มอิ่มกับรายละเอียดต่างๆ บนเวที ทั้งระบบแสง เสียง และเทคนิคพิเศษมากมายอย่างเต็มอรรถรส`,
    price: '3,000',
    link: 'http://uat-www.pandapass.asia/booking/external/5?ticketClassTypeName=Cloud'
  },
  sky: {
    key: 'sky',
    title: 'SKY ZONE',
    image: require('../assets/images/sky-map.png'),
    imageSeat: require('../assets/images/purple-seat.png'),
    content: `่นัที่นั่งโซนราคาคุ้มค่านี้ อยู่ในจุดรับชมการแสดงที่ถัดออกมาจากโซนอื่นๆ เบาะที่นั่งมีความกว้าง 51 ซม. คุณจะรับชมการแสดงแบบองค์รวมได้อย่างครบอรรถรสที่สุด
    สามารถมองเห็นรายละเอียดการแสดงที่เกิดขึ้นได้ทั่วทั้งหมด พร้อมกันนี้คุณจะได้ตื่นตาตื่นใจกับฉากหลังสุดอลังการไม่แพ้โซนอื่นๆ เช่นกัน`,
    price: '2,500',
    link: 'http://uat-www.pandapass.asia/booking/external/5?ticketClassTypeName=Sky'
  }
}
const SeatingPlanSection = React.createClass({
  componentDidMount () {
    require('../assets/js/imageMap')
    $('img[usemap]').rwdImageMaps()
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
        e.preventDefault()
        this.setState({current: state, isModalOpen: true})
      }
    }
  },
  renderModalPopUp (x) {
    return (
      <Modal
        isOpen={this.state.current === x.key && this.state.isModalOpen}
        onRequestClose={this.closeModal}
        className={styles.modal}
      >
        <div className={styles.modalMapContainer}>
          <div className={styles.mapContainerPopUp}>
            <img src={x.image} />
          </div>
          <div className={`${styles.contentContainer} ${styles.popup}`}>
            <img
              src={require('../assets/images/closeButton.png')}
              className={styles.closeButton}
              onClick={() => this.setState({current: 'all'})}
            />
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
          <img src={require('../assets/images/sky-map-hover.png')} style={{opacity: this.state.current === 'sky' ? 1 : 0}} />
          <img src={require('../assets/images/star-map-hover.png')} style={{opacity: this.state.current === 'star' ? 1 : 0}} />
          <img src={require('../assets/images/ocean-map-hover.png')} style={{opacity: this.state.current === 'ocean' ? 1 : 0}} />
          <img src={require('../assets/images/cloud-map-hover.png')} style={{opacity: this.state.current === 'cloud' ? 1 : 0}} />
          <map name="Map" id="Map">
            <img
              src={require('../assets/images/map.png')}
              useMap="#Map"
              style={{
                opacity: this.state.current === 'all' ? 1 : 0,
                zIndex: 1
              }}
              onMouseOut={this.onChangeState('all')}
            />
            <area
              shape="poly"
              coords="77,143,129,248,6,313,6,29,217,4,381,8,476,13,592,37,588,297,486,236,524,141,388,94,229,89"
              onClick={this.onChangeState('sky', 'click')}
              onMouseOver={this.onChangeState('sky')}
            />
            <area
              shape="poly"
              coords="86,142,218,100,375,100,516,142,489,199,378,159,243,159,113,195"
              onClick={this.onChangeState('cloud', 'click')}
              onMouseOver={this.onChangeState('cloud')}
            />
            <area
              shape="poly"
              coords="118,202,225,169,361,163,491,204,476,239,317,196,179,222,135,239"
              onClick={this.onChangeState('star', 'click')}
              onMouseOver={this.onChangeState('star')}
            />
            <area
              shape="poly"
              coords="37,354,152,263,230,237,319,231,378,248,575,350,487,436,314,363,126,442"
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
