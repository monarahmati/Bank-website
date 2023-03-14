import React from 'react';
import { quotes } from "../assets/assets";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
  <div dir='rtl' className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
    <p className="font-YekanBakh font-YekanBakhMedium text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col mr-5">
        <h4 className="font-YekanBakh font-YekanBakhBold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-YekanBakh font-YekanBakhMedium text-[16px] leading-[24px] text-dimWhite" style={{color:'dimgrey'}}>
          {title}
        </p>
      </div>
    </div>
  </div>
  )
}

export default FeedbackCard