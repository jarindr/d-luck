import React, { PropTypes } from 'react'

import styles from './LocationSection.styl'

const LocationSection = React.createClass({
  render () {
    return (
      <div className={styles.container}>
        <h1>LOCATION & MAP</h1>
        <img src={require('../assets/images/dluck-map.png')} className={styles.map} />
        <div className={styles.mapLocationContainer}>
          <div className={styles.col} style={{width: '45%'}}>
            <h2>D'LUCK Cinematic Theatre</h2>
            <span style={{fontWeight: 400}}>ดีลักษณ์ ซีนีมาติก เธียเตอร์</span>
          </div>
          <div className={styles.col} style={{width: '30%', fontSize: '12px'}}>
            <img src={require('../assets/images/location-icon.png')} className={styles.icon} />
            <div style={{display: 'inline-block'}}>168/8 หมู่ 12 ถนนเทพประสิทธิ์ ต.หนองปรือ<br />อ.บางละมุง จ.ชลบุรี 20260</div>
          </div>
          <div className={styles.col} style={{float: 'right', fontSize: '12px'}}>
            <img src={require('../assets/images/phone-icon.png')} width='10' style={{marginRight: '5px'}} />T.xxx-xxx-xxxx <br />
            <img src={require('../assets/images/clock-icon.png')} width='10' style={{marginRight: '5px'}} />เวลาเปิด: XX:XX - XX:XX
          </div>
        </div>
        <div className={styles.transportInformationContainer}>
          <h2>TRANSPORT<br />INFORMATION</h2>
          <div className={styles.col} style={{width: '60%'}}>
            <h3>PERSONAL TRANSIT (รถยนตร์ส่วนตัว)</h3>
            <div>
              <img src={require('../assets/images/person-icon.png')} />
              การเดินทางโดยรถยนตร์ส่วนตัวเริ่มจาก ถ.สุขุมวิท พัทยา
            </div>
          </div>
          <div className={styles.col} style={{width: '40%'}}>
            <h3>PUBLIC TRANSIT (ขนส่งสาธารณะ)</h3>
            <div>
              <img src={require('../assets/images/public-icon.png')} />
              <div style={{display: 'inline-block'}}>
                <h4>1. From BKK (กทม.-พัทยา)</h4>
                รถตู้
                <ul>
                  <li>อนุสาวรีย์ชัยสมรภูมิ-พัทยา (เซ็นจูรี่)</li>
                  <li>บางกระปิ-พัทยา</li>
                  <li>รามคำแหง-พัทยา</li>
                </ul>
                รถบัส
                <ul>
                  <li>สถานีเอกมัย</li>
                </ul>
                <h4>2. From พัทยา</h4>
                <ul>
                  <li>สถานีขนส่ง</li>
                  <li>พัทยาเหนือ / กลาง / ใต้</li>
                </ul>
              </div>
            </div>
            <div>
              <img src={require('../assets/images/plane-icon.png')} />
              <div style={{display: 'inline-block'}}>
                <h4>3. From สนามบิน</h4>
                <ul>
                  <li>สนามบินสุวรรณภูมิ</li>
                  <li>สนามบินดอนเมือง</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default LocationSection
