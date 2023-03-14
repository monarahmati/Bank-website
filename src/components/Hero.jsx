import React from 'react';
import styles from '../style';
import GetStarted from './GetStarted'
import { discount , robot } from '../assets/assets';

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`} >

      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6` }>

        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`} style={{color:'dimgray'  }}>
            <span className="text-white">20%  </span>تخفیف برای {" "}
            <span className="text-white">1 ماه</span>  حساب
          </p>
        </div>

        <div  className="flex flex-row justify-between items-center w-full">

          <h1  className="flex-1 font-YekanBakh font-YekanBakhBold font-bold ss:text-[62px] text-[40px] text-white ss:leading-[100.8px] leading-[75px]">

            پرداختی آسان از
          <br className="sm:block hidden" />{" "}

            <span  className="text-gradient">
            نسل نوین
            </span>{" "}

          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-YekanBakh font-YekanBakhBold font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        </h1>
        <p dir='rtl' className={`${styles.paragraph} max-w-[470px] mt-5 font-YekanBakh font-YekanBakhBold font-medium `} style={{color:'#fff'}}>
        تیم کارشناسان ما از روشی برای شناسایی کارت های اعتباری استفاده می کنند
          به احتمال زیاد مطابق با نیازهای شما ما نرخ های درصد سالانه را بررسی می کنیم،
          هزینه های سالانه.
        </p>

      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>

    </section>
  )
}

export default Hero