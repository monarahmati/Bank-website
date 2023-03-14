import React from 'react';
import { features } from '../constants';
import styles , {layout} from '../style';
import Button from './Button'



const FeatureCard = ({ icon , title , content , index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0" } feature-card `}>

        <div  className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`} >
          <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
        </div>

        <div className="flex-1 flex flex-col ml-3">
          <h4 className="font-YekanBakh font-YekanBakhBold font-bold text-white text-[18px] leading-[23.4px] mb-1">
            {title}
          </h4>
          <p className="font-YekanBakh font-YekanBakhMedium font-medium text-dimWhite text-[16px] leading-[24px]"  style={{ color:"#fff"}} >
            {content}
          </p>
        </div>

    </div>
)



const Business = () => {
    return (
        <section  id='features' className={layout.section} >

          
            <div dir='rtl'  className={layout.sectionInfo} style={{ marginRight:'3rem' }} >

                <h2 className={styles.heading2}> 
                 
                 {/* <br className="sm:block hidden" />  */}
                   هنگامی که شما در حال
                 انجام کار  خود هستید  
                ما به پول های شما رسیدگی میکنیم
                {/* <br className="sm:block hidden" />  */}
                </h2>

                <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{ color:"#fff"}}>
                با کارت اعتباری مناسب، می توانید زندگی مالی خود را بهبود بخشید
                    ایجاد اعتبار، کسب پاداش و پس انداز پول. اما با صدها
                     کارت های اعتباری موجود در بازار بسیار متفاوت میباشد
                </p>

                <Button styles={`mt-10 mr-10`} />
            </div>

            <div dir='rtl' className={`${layout.sectionImg} flex-col`}>
              {features.map((feature, index) => (
              <FeatureCard key={feature.id} {...feature} index={index} />
                 ))}
            </div>
        </section>
    );
};

export default Business;