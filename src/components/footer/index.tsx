import React from 'react';

import style from './style.module.scss'

import AfterFooter from './afterFooter';
const Footer: React.FC = () => {
    return (
        <section className='bg-black'>
            <div className='container mx-auto py-[100px]'>
                <div className={style.line}/>
                <h1 className={style.footerh1}>
                    <div className=''>
                        <div>ЗАПИСАТЬСЯ</div>
                    </div>
                    <div className=''>
                        <div>НА СЕАНС</div>
                    </div>
                </h1>
                <div className={style.par}>
                    <p>зачем ждать, <br /> если можно сейчас?</p>
                </div>
                <div className={style.line}/>
                <AfterFooter />
            </div>
        </section>
    );
};

export default Footer;
