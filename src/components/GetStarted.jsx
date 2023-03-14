import React from 'react';
import styles from '../style';
import { arrowUp } from '../assets/assets';

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`} >
    <div className={`${styles.flexCenter} flex-col  w-[100%] h-[100%] rounded-full`} style={{ backgroundColor:"#000" }}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-YekanBakh font-YekanBakhHeavy text-[18px] leading-[23.4px]">
          <span className="text-gradient">شروع</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-YekanBakh font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">  کنید</span>
      </p>
    </div>
      
    </div>
  )
}

export default GetStarted