import React from 'react'
import { card } from "../assets/assets";
import styles, { layout } from "../style";
import Button from "./Button";



const CardDeal = () => {
  return (
  <section className={layout.section}>
    <div dir='rtl' className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      
      {/* <br className="sm:block hidden" /> */}
      {/* <br className="sm:block hidden" /> */}
      طی چند مرحله آسان

      برای معاملات خود کارت
            
      بهتری تهیه کنید

      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{ color:'#fff'}}>
      مراحل ثبت نام را دنبال کرده و اطمینان حاصل کنید که موارد لازم برای افتتاح حساب را ارائه نمایید
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
  )
}

export default CardDeal