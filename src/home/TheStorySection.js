import React from 'react'
import Title from '../components/Title'
import styles from './TheStorySection.styl'

const TheStorySection = React.createClass({
  render () {
    return (
      <div className={styles.container}>
        <Title text='THE STORY' />
        <p>
          หลังจากที่สูญเสียพ่อไป ‘คาน’ ได้เข้าไปในห้องสมุดเก่าๆ ของพ่อ
          และเจอหนังสือเล่มหนึ่งที่มีชื่อเดียวกับเขา และเมื่อคานเปิดหนังสือเล่มนั้น
          การผจญภัยสุดอัศจรรย์ของเขาก็เริ่มต้นขึ้น!!
          คานได้เดินทางไปสู่ดินแดนสุดมหัศจรรย์ 6 แห่ง เขาได้พบกับตัวละคร
          ในวรรณคดีไทยต่างๆ มากมาย ไม่ว่าจะเป็น พระอภัยมณี ผีเสื้อสมุทร พรานบุญ
          กินรี เงาะป่า เมขลา รามสูร ไกรทอง ชาละวัน พระราม พระลักษณ์ และทศกัณฐ์
          การผจญภัยครั้งนี้จะสอนให้เขาได้เรียนรู้และเติบโตเป็นชายหนุ่มที่สมบูรณ์
          อย่างที่พ่อตั้งใจได้หรือไม่ ติดตามได้ใน KAAN ...
        </p>
      </div>
    )
  }
})

export default TheStorySection