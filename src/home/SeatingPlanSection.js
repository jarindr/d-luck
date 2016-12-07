import '../assets/js/imageMap'

import React from 'react'
import styles from './SeatingPlanSection.styl'

const SeatingPlanSection = React.createClass({
  componentDidMount () {
    $('img[usemap]').rwdImageMaps()
  },
  getInitialState () {
    return {
      current: 'all'
    }
  },
  onChangeState (state) {
    return (e) => {
      e.preventDefault()
      this.setState({current: state})
    }
  },
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.mapContainer}>
          <img src={require('../assets/images/map.png')} useMap="#Map" style={{opacity: this.state.current === 'all' ? 1 : 0, zIndex: 10}} />
          <img src={require('../assets/images/sky-map.png')} style={{opacity: this.state.current === 'sky' ? 1 : 0}} />
          <img src={require('../assets/images/star-map.png')} style={{opacity: this.state.current === 'star' ? 1 : 0}} />
          <img src={require('../assets/images/ocean-map.png')} style={{opacity: this.state.current === 'ocean' ? 1 : 0}} />
          <img src={require('../assets/images/cloud-map.png')} style={{opacity: this.state.current === 'cloud' ? 1 : 0}} />
          <map name="Map" id="Map">
            <img src="url/to/your/image.jpg" alt="" useMap="#Map" />
            <area
              shape="poly"
              coords="23,80,171,15,207,27,360,4,651,13,710,2,832,22,951,42,1003,77,1005,198,1005,475,991,498,837,395,892,241,799,193,651,146,648,94,621,83,561,76,489,82,432,81,388,90,364,163,237,191,132,243,216,420,49,529,11,482"
              onMouseOver={this.onChangeState('sky')}
              />
            <area
              shape="poly"
              coords="392,92,528,81,642,95,636,133,657,164,724,180,884,241,840,338,646,284,512,262,417,277,287,302,199,340,147,243,251,202,369,172"
              onMouseOver={this.onChangeState('cloud')}
            />
            <area
              shape="poly"
              coords="202,347,285,309,383,286,516,271,611,282,742,313,833,342,807,403,642,355,507,339,320,371,229,404"
              onMouseOver={this.onChangeState('star')}
            />
            <area
              shape="poly"
              coords="66,601,260,465,498,410,630,421,757,460,884,531,967,615,826,730,701,654,540,614,369,640,207,737"
              onMouseOver={this.onChangeState('ocean')}
            />
          </map>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.content} style={{opacity: this.state.current === 'all' ? 1 : 0, zIndex: 2}}>
            <h1>SEATING PLAN</h1>
            <h2>ประเภทของที่นั่ง</h2>
            <p>
              ที่นั่งของดีลักษณ์ ซีเนมาติก เธียเตอร์
              ถูกแบ่งออกเป็น 4 โซน แต่ละโซนถูกตั้งชื่อโดยใช้ส่วนต่างๆ ของโลก
              แทนมุมมองของ การมองเห็น เพื่อให้คุณรู้สึกเสมือนได้ผจญภัย
              ไปในโลกใบใหม่ที่เต็มไปด้วยเรื่องราวเหนือจินตนาการ
            </p>
            <div className={styles.seatContainer} onClick={this.onChangeState('sky')} >
              <img src={require('../assets/images/purple-seat.png')} />
              Sky zone
            </div>
            <div className={styles.seatContainer} onClick={this.onChangeState('ocean')}>
              <img src={require('../assets/images/ocean-seat.png')} />
              Ocean Zone
            </div>
            <div className={styles.seatContainer} onClick={this.onChangeState('cloud')}>
              <img src={require('../assets/images/sky-seat.png')} />
              Cloud Zone
            </div>
            <div className={styles.seatContainer} onClick={this.onChangeState('star')}>
              <img src={require('../assets/images/star.png')} />
              Star Zone
            </div>
          </div>
          {/* -----------------------------------------------------------------*/}
          <div className={styles.content} style={{opacity: this.state.current === 'star' ? 1 : 0}}>
            <h1>SEATING PLAN</h1>
            <h3><img src={require('../assets/images/star.png')} /> STAR ZONE</h3>
            <p>
              นี่คือโซนพิเศษที่ดีที่สุด(VIP) เบาะที่นั่งมีความกว้างถึง 56 ซม. เป็นเบาะที่นั่งที่กว้างที่สุด ให้ความรู้สึกสะดวกสบายเวลารับชม ที่นั่งโซนนี้อยู่จุดศูนย์กลางโรงละคร
               ซึ่งเป็นตำแหน่งที่รับชมการแสดงได้ดีที่สุด  ทำให้คุณได้ชมโชว์ด้วยความประทับใจ จากมุมมองที่ยอดเยี่ยม สามารถรับชมภาพฉายบนจอขนาดใหญ่ที่ฉากหลังและพื้น
               (High Definition Projection Mapping) ได้อย่างชัดเจนที่สุด และยังเป็นจุดที่รับฟังระบบเสียงที่ได้รับการออกแบบอย่างมีประสิทธิภาพ ได้สมบูรณ์แบบที่สุดด้วย
            </p>
            <p>ราคา 4,000 บาท</p>
            <button type='button'>BUY TICKET</button>
          </div>
          {/* -----------------------------------------------------------------*/}
          <div className={styles.content} style={{opacity: this.state.current === 'cloud' ? 1 : 0}}>
            <h1>SEATING PLAN</h1>
            <h3><img src={require('../assets/images/sky-seat.png')} /> CLOUD ZONE</h3>
            <p>
              นีที่นั่งโซนนี้อยู่บริเวณศูนย์กลาง โรงละคร มีมุมมองที่ใกล้เคียงกับ Star Zone เบาะที่นั่งมีความกว้าง 53 ซม. คุณจะได้ชมโชว์ด้วยความประทับใจในมุมมองที่ดี
              และเต็มอิ่มกับรายละเอียดต่างๆ บนเวที ทั้งระบบแสง เสียง และเทคนิคพิเศษมากมายอย่างเต็มอรรถรส
            </p>
            <p>ราคา 3,000 บาท</p>
            <button type='button'>BUY TICKET</button>
          </div>
          {/* -----------------------------------------------------------------*/}
          <div className={styles.content} style={{opacity: this.state.current === 'ocean' ? 1 : 0}}>
            <h1>SEATING PLAN</h1>
            <h3><img src={require('../assets/images/ocean-seat.png')} /> OCEAN ZONE</h3>
            <p>
            ที่นั่งโซนนี้อยู่ใกล้ชิดเวทีการแสดงมากที่สุด เบาะที่นั่งมีความกว้าง 53 ซม. เหมาะสำหรับผู้ที่ต้องการรับชมการแสดงในระยะใกล้ เห็นรายละเอียดต่างๆ บนเวทีได้อย่างชัดเจน
            ทำให้คุณได้สัมผัสประสบการณ์ การแสดงอย่างใกล้ชิดราวกับได้หลุดเข้าไปในโลกของการแสดงจริงๆ
            </p>
            <p>ราคา 3,000 บาท</p>
            <button type='button'>BUY TICKET</button>
          </div>
          {/* -----------------------------------------------------------------*/}
          <div className={styles.content} style={{opacity: this.state.current === 'sky' ? 1 : 0}}>
            <h1>SEATING PLAN</h1>
            <h3><img src={require('../assets/images/purple-seat.png')} /> SKY ZONE</h3>
            <p>
              ที่นั่งโซนราคาคุ้มค่านี้ อยู่ในจุดรับชมการแสดงที่ถัดออกมาจากโซนอื่นๆ เบาะที่นั่งมีความกว้าง 51 ซม. คุณจะรับชมการแสดงแบบองค์รวมได้อย่างครบอรรถรสที่สุด
              สามารถมองเห็นรายละเอียดการแสดงที่เกิดขึ้นได้ทั่วทั้งหมด พร้อมกันนี้คุณจะได้ตื่นตาตื่นใจกับฉากหลังสุดอลังการไม่แพ้โซนอื่นๆ เช่นกัน
            </p>
            <p>ราคา 2,500 บาท</p>
            <button type='button'>BUY TICKET</button>
          </div>
        </div>
      </div>
    )
  }
})

export default SeatingPlanSection
