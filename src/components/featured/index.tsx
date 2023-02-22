import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import style from './style.module.scss';

import TattooImg from '../../assets/tattoo1.jpg';

const Featured: React.FC = () => {
    return (
        <section className='bg-black'>
            <div className='container mx-auto'>
                <div className={style.featuredSection}>
                    <div className={style.featuredRowLayout}>
                        <h6>GREEN</h6>
                        <Image
                            className='img'
                            src={TattooImg}
                            alt='masthead-image'
                            width={800 / 2}
                            height={1400 / 2}
                            data-scroll
                        />
                    </div>
                    <div className={style.featuredColumnLayout}>
                        <h6>RED</h6>
                        <Image
                            src={TattooImg}
                            alt='masthead-image'
                            width={1500 / 2}
                            height={3200 / 2}
                            data-scroll
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;
