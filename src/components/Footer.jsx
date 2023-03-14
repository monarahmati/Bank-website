import React from 'react';
import styles from "../style";
import { logo } from "../assets/assets";
import { footerLinks, socialMedia } from "../constants";



const Footer = () => {
  return (

  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p  dir='rtl' className={`${styles.paragraph} mt-4 max-w-[312px]  font-YekanBakh font-YekanBakhBold font-medium`} style={{color:'#fff'}}>
        روشی مطمئن و آسان  برای پرداخت های شما
        </p>
      </div>

      <div  dir='rtl' className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 mr-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-YekanBakh font-iranyekanwebregular font-bold text-[18px] leading-[27px] text-white" style={{color:'#fff'}}>
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  style={{color:'dimgray' , hover:'text-[secondary]'}}
                  key={link.name}
                  className={`font-YekanBakh font-iranyekanwebregular text-[16px] leading-[24px] text-dimWhite hover:text-[secondary] cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-YekanBakh font-iranyekanwebregular text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ venus.javascript
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
  )
}

export default Footer