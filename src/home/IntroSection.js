import React from 'react'
import styles from './IntroSection.styl'

const IntroSection = React.createClass({
  render () {
    return (
      <div className={styles.container}>
        <h1>SINGHA D’LUCK CINEMATIC THEATRE</h1>
        <p style={{textAlign: 'center', paddingBottom: '20px', marginTop: '50px'}}><b>สิงห์ ดีลักษณ์ ซีเนมาติก เธียเตอร์ โรงละครลอยได้แห่งแรกของโลก</b></p>
        <p>
        “เมื่อโลกแห่งจินตนาการกลายเป็นความจริง จากความฝัน สู่... สถาปัตยกรรมสุดอัศจรรย์” โรงละครที่ออกแบบภายใต้แนวคิด “Levitation” ที่สามารถรองรับผู้ชมต่อรอบได้ถึง
        1,400 คน ที่จะกลายเป็นแลนด์มาร์คแห่งใหม่ของเมืองพัทยาและประเทศไทย มีขนาดรวมของพื้นที่ทําการแสดงทั้งหมดกว่า 1,000 ตารางเมตร และมีขนาดพื้นที่สําหรับฉายโปรเจคเตอร์ที่ใหญ่ที่สุดในเอเชีย หรือ มีขนาดเท่ากับจอภาพยนตร์ IMAX
        ต่อกันถึง 3 จอ และมีการจัดทําระบบของเวที แสง สี เสียง ที่ได้มาตรฐานระดับโลก
        </p>
      </div>
    )
  }
})

export default IntroSection
