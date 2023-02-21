import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from './works.module.scss';
import tatImg from '../../assets/tattoo1.jpg';

const Works = () => {
    return (
        <section className='bg-black'>
            <div className='container mx-auto'>
                <div className={style.container}>
                    <Image
                        className={style.img1}
                        src={tatImg}
                        alt='Img'
                        width={700 / 2}
                        height={1000 / 2}
                    />
                    <Image
                        className={style.img2}
                        src={tatImg}
                        alt='Img'
                        width={500 / 2}
                        height={500 / 2}
                    />
                    <Image
                        className={style.img3}
                        src={tatImg}
                        alt='Img'
                        width={1000 / 2}
                        height={1400 / 2}
                    />
                    <Image
                        className={style.img4}
                        src={tatImg}
                        alt='Img'
                        width={300 / 2}
                        height={500 / 2}
                    />
                    <Image
                        className={style.img5}
                        src={tatImg}
                        alt='Img'
                        width={500 / 2}
                        height={600 / 2}
                    />
                </div>
            </div>
        </section>
    );
};

export default Works;
