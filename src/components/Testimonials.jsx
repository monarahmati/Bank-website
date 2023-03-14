import React from 'react';
import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';


const Testimonials = () => {
  return (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div dir='rtl' className="w-full flex xl:flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2  dir='rtl' className={styles.heading2}>
           نظر کاربران
          درباره ما  
       <br/>

      </h2>
      <div   className="w-full md:mt-0 mt-6">
        <p  dir='rtl' className={`${styles.paragraph}  max-w-[450px]`} style={{color:'#fff'}}>
        همه چیزهایی که برای پذیرش پرداخت کارت و رشد کسب و کار خود نیاز دارید
          در هر نقطه از این سیاره
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
  )
}

export default Testimonials