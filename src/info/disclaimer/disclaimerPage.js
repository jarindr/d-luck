import React from 'react'
import styles from './disclaimerPage.styl'
const PrivacyPage = React.createClass({
  render () {
    return (
      <div className={styles.container}>
        <h1>Disclaimer</h1>
        <h2>ข้อจำกัดความรับผิด</h2>
        <p>
          ภายใต้ขอบเขตตามที่กฎหมายที่เกี่ยวข้อง/อนุญาต ท่านยืนยันและยอมรับตามข้อตกลงดังต่อไปนี้:
          <ul>
            <li>1.  เราไม่รับประกันว่า:</li>
            <ul>
              <li>(ก) การใช้งาน บริการและคุณสมบัติของการรักษาความปลอดภัยที่มีในเว็บไซต์นี้ จะปราศจากการหยุดชะงักหรือปราศจากข้อผิดพลาด</li>
              <li>(ข) ข้อผิดพลาดหรือความล้มเหลวจะถูกซ่อมแซม หรือ</li>
              <li>(ค) เว็บไซต์หรือเซิร์ฟเวอร์จะให้บริการที่ไม่มีไวรัส มัลแวร์หรือส่วนประกอบที่เป็นอันตราย</li>
              <li>(ง) เนื้อหาในเว็บไซต์มีความถูกต้องสมบูรณ์เพียงพอ หรือทันกาลเวลา
                เราไม่รับผิดชอบต่อความเสียหายใดๆ ไม่ว่าจะเป็นความเสียหายทางตรง ความเสียหายทางอ้อม ความเสียหายพิเศษ หรือความเสียหายที่เป็นผลต่อเนื่อง (รวมถึงการสูญเสียรายได้หรือผลกำไร) ค่าใช้จ่าย หรือการรับโทษใดๆ สำหรับความผิดพลาด ความล่าช้าของข้อมูลการขาดความต่อเนื่องของการเชื่อมโยงอุปกรณ์   หรือการใช้งานใดๆ บนเว็บไซต์บนเว็บไซต์นี้ทั้งหมด
              </li>
            </ul>
            2. สื่อใดๆ ที่ดาวน์โหลดในเว็บไซต์นี้เป็นความรับผิดชอบและความเสี่ยงของท่านเองแต่เพียงผู้เดียว ท่าน สมัครใจรับความเสี่ยงดังกล่าว และท่านจะรับผิดชอบต่อความเสียหายที่เกิดขึ้นกับระบบคอมพิวเตอร์ของท่านหรือการสูญเสียข้อมูลที่เกิดจากการดาวน์โหลดสื่อใดๆ ที่มีให้ทั้งหมดนั้นเอง
          </ul>
        </p>
      </div>
    )
  }
})

export default PrivacyPage