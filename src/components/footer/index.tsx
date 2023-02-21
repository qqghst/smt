import React from 'react';

import styles from './style.module.scss'

import AfterFooter from './afterFooter';
const Footer: React.FC = () => {
    return (
        <section className='bg-black'>
            <div className='container mx-auto py-[100px]'>
                <div className={styles.line}/>
                <h1 className={styles.footerh1}>
                    <div className=''>
                        <div>ЗАПИСАТЬСЯ</div>
                    </div>
                    <div className=''>
                        <div>НА СЕАНС</div>
                    </div>
                </h1>
                <div className={styles.par}>
                    <p>зачем ждать, <br /> если можно сейчас?</p>
                </div>
                <div className={styles.line}/>
                <AfterFooter />
            </div>
        </section>
    );
};

export default Footer;
