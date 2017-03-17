import React from 'react'
import styles from './LocationSection.styl'

const LocationSection = React.createClass({
  render () {
    return (
      <div className={styles.container}>
        <h1>LOCATION & MAP</h1>
        <div className={styles.mapContainer}>
          <img src={require('../assets/images/dluck-map.png')} className={styles.map} />
          <div className={styles.beaconContainer}>
            <img
              src={require('../assets/images/beacon.png')}
              onClick={() => window.open('https://goo.gl/maps/7y8bpXgA7M52', '_blank')}
              className={styles.beacon}
            />
            <img src={require('../assets/images/google-map-dluck.png')} className={styles.googlemapdluck} />
          </div>
        </div>
        <div className={styles.mapLocationContainer}>
          <div className={styles.col} style={{ width: '45%' }}>
            <h2>{'SINGHA D\'LUCK Cinematic Theatre'}</h2>
            <span style={{ fontWeight: 400 }}>สิงห์ ดีลักษณ์ ซีนีมาติก เธียเตอร์</span>
          </div>
          <div className={styles.col} style={{ width: '30%', fontSize: '12px' }}>
            <img src={require('../assets/images/location-icon.png')} className={styles.icon} />
            <div style={{ display: 'inline-block' }}>168/8 หมู่ 12 ถนนเทพประสิทธิ์ ต.หนองปรือ<br />อ.บางละมุง จ.ชลบุรี 20260</div>
          </div>
          <div className={styles.col} style={{ float: 'right', fontSize: '12px' }}>
            <img src={require('../assets/images/phone-icon.png')} width='10' style={{ marginRight: '5px' }} />T.xxx-xxx-xxxx <br />
            <img src={require('../assets/images/clock-icon.png')} width='10' style={{ marginRight: '5px' }} />เวลาเปิด: XX:XX - XX:XX
          </div>
        </div>
        <div className={styles.transportInformationContainer}>
          <h2>การเดินทาง<br />(TRANSPORTATION)</h2>
          <div className={styles.col}>
            <h3>การเดินทางโดยรถยนต์ส่วนบุคคล<br />(PERSONAL TRANSPORTATION)</h3>
            <div>
              <img src={require('../assets/images/person-icon.png')} />
              <div style={{ display: 'inline-block' }}>
                <h4>ถนนสุขุมวิท (ทางหลวงหมายเลข 3)</h4>
                <ul>
                  <li>
                    มาจากกรุงเทพฯ หรือ ชลบุรี<br />
                    เมื่อเข้าเขตเมืองพัทยา ให้ขับตรงไปผ่านแยกพัทยาเหนือ,<br />
                    แยกพัทยากลางและแยกพัทยาใต้ จนกระทั่งถึงแยกเทพประสิทธิ์<br />
                    (แยกที่มี Outlet Mall Pattaya อยู่ทางด้านขวามือ)<br />
                    จากนั้นให้เลี้ยวขวาเข้าสู่ถนนเทพประสิทธิ์ ขับตรงมาเรื่อยๆ<br />
                    ราว 2 กม. จะเห็น SINGHA D’LUCK Cinematic Theatre<br />อยู่ทางด้านขวามือ
                  </li>
                  <li>
                    มาจากระยอง หรือ สัตหีบ<br />
                    ขับตามถนนสุขุมวิทมาเรื่อยๆ จนกระทั่งถึงแยกเทพประสิทธิ์<br />
                    (แยกที่มี Outlet Mall Pattaya อยู่ทางด้านซ้ายมือ / ก่อนแยก<br />
                    พัทยาใต้) จากนั้นให้เลี้ยวซ้ายเข้าสู่ถนนเทพประสิทธิ์ ขับตรงมา<br />เรื่อยๆราว 2 กม. จะเห็น SINGHA D’LUCK Cinematic<br />
                    Theatre อยู่ทางด้านขวามือ
                  </li>
                  <h4 style={{ margin: '10px 0' }}>มอเตอร์เวย์​ (ทางหลวงพิเศษหมายเลข 7)</h4>
                  <li>จากกรุงเทพฯ<br />
                    ขับตรงมาเรื่อยจนถึงทางออกบริเวณพัทยาเหนือ<br />
                    จากนั้นเลี้ยวซ้ายเข้าสู่ถนนสุขุมวิท แล้วขับตรงไปเรื่อยๆ<br />
                    ผ่านแยกพัทยาเหนือ, แยกพัทยากลาง และแยกพัทยาใต้<br />จนกระทั่งถึงแยกเทพประสิทธิ์ (แยกที่มี Outlet Mall Pattaya<br />
                    อยู่ทางด้านขวามือ) จากนั้นให้เลี้ยวขวาเข้าสู่ถนนเทพประสิทธิ์<br />
                    ขับตรงมาเรื่อยๆ ราว 2 กม. จะเห็น SINGHA D’LUCK<br />
                    Cinematic Theatre อยู่ทางด้านขวามือ
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.col} style={{ width: 'auto', float: 'right' }}>
            <h3>การเดินทางโดยขนส่งสาธารณะ<br />(PUBLIC TRANSPORTATION)</h3>
            <div>
              <img src={require('../assets/images/public-icon.png')} />
              <div style={{ display: 'inline-block' }}>
                <h4>การเดินทางภายในเมืองพัทยา (Public Transportation)</h4>
                <ul>
                  <li>
                    ภายในบริเวณเมืองพัทยา<br />
                    ท่านสามารถนั่งรถสองแถว, แท็กซี่, หรือบริการขนส่งสาธารณะ<br />
                    ต่างๆ แล้วแจ้งว่ามายัง SINGHA D’LUCK Cinematic Theatre<br />
                    ถนนเทพประสิทธิ์ (อยู่ตรงข้าม ซ.เทพประสิทธิ์ 11 และ<br />
                    ซ.เทพประสิทธิ์ 13)
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img src={require('../assets/images/plane-icon.png')} />
              <div style={{ display: 'inline-block' }}>
                <h4>การเดินทางจากสนามบิน (From Airport)</h4>
                <h4>ท่าอากาศยานสุวรรณภูมิ (Suvarnabhumi Airport)</h4>
                <ul>
                  <li>
                    รถโดยสารสาย 389 : ท่าอากาศยานสุวรรณภูมิ – พัทยา<br />
                    สามารถขึ้นรถได้ที่อาคารผู้โดยสารชั้น 1 ประตู 8 (บริการ<br />
                    07.00-21.00 น.) ลงที่ SINGHA D’LUCK Cinematic<br />
                    Theatre ถนนเทพประสิทธิ์
                  </li>
                </ul>
                <h4>ท่าอากาศยานดอนเมือง (Don Mueang Airport)</h4>
                <ul>
                  <li>
                    Shuttle Bus ดอนเมือง – สุวรรณภูมิ<br />
                    นั่งรถ Shuttle Bus (บริการฟรีสำหรับผู้มีตั๋วโดยสารเครื่องบิน)<br />
                    ไปลงที่ท่าอากาศยานสุวรรณภูมิ เสร็จแล้วต่อรถโดยสาร<br />
                    สาย 389 ลงที่ SINGHA D’LUCK Cinematic Theatre<br />
                    ถนนเทพประสิทธิ์
                  </li>
                  <li>
                    Airport Bus สาย A1 : ดอนเมือง – สถานีขนส่งสายเหนือ (หมอชิต)<br />
                    นั่งรถสาย A1 มาลงที่สถานีขนส่งสายเหนือ (หมอชิต) เสร็จแล้ว<br />
                    ต่อรถโดยสารปรับอากาศสายกรุงเทพฯ-พัทยา มาลงที่สถานี<br />
                    รถโดยสารปรับอากาศ พัทยา – กรุงเทพฯ (บขส.)<br />
                    จากนั้นต่อรถสาธารณะมาที่ ถนนเทพประสิทธิ์เพื่อลงที่<br />
                    SINGHA D’LUCK Cinematic Theatre
                  </li>
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
