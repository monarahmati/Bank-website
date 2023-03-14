import React from 'react';
import styles from "../style";
import Button from "./Button";



const CTA = () => {
  return (

  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>

    
    <div dir='rtl' className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>  اکنون میتوانید خدمات ما را امتحان کنید </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{color:'dimgrey'}}>
      همه چیزهایی که برای پذیرش پرداخت کارت و رشد کسب و کار خود نیاز دارید
         در هر نقطه زمین
      </p>
    </div>
{/* 
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div> */}
  </section>
  )
}

export default CTA;