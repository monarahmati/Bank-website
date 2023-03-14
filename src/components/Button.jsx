import React from 'react';

const Button = ({ styles }) => {
    return (
        <button type='button' className={`py-4 px-6 bg-blue-gradient font-YekanBakh font-medium font-iranyekanwebmedium  text-[18px] text-primary outline-none ${styles} rounded-[10px] `}>
          شروع کنید
        </button>
    );
};

export default Button;