import React from 'react';
import { apple , bill , google } from '../assets/assets';
import styles , {layout} from '../style';

const Billing = () => {
    return (
        <section id='product' className={layout.sectionReverse}>
          <div className={layout.sectionImgReverse} >
            <img src={bill} alt='billing' className="w-[100%] h-[100%] relative z-[5]" />

            {/* gradient start */}
            {/* <div className="absolute z-[3] w-[60%] h-[60%] -right-[50%] rounded-full white__gradient bottom-40" /> */}
            {/* <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full  pink__gradient bottom-40" /> */}
             <div className="absolute z-[3] -left-1/2 top-10 w-[50%] h-[50%] rounded-full white__gradient" />
             <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
            {/* gradient end */}

          </div>

          <div dir='rtl' className={`flex-1 flex justify-center items-start flex-col`} >
            <h2 className={styles.heading2}>
              صورت حساب خود را
                    
               به راحتی کنترل کنید
            </h2>
            <p className={`${styles.paragraph} mt-5`} style={{ color:'#fff' , maxWidth:'470px'}}>

            در واقع این یک روش سرمایه گذاری
             با توجه به روش مربیگری  موریس در فوتبال میباشد و یک جرم نیست   
            </p>
      
            <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
              <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
              <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
            </div>
          </div>
        </section>
    );
};

export default Billing;