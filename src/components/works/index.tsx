import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import style from './style.module.scss';

import tatImg from '../../assets/tattoo1.jpg';

const Works = () => {
    return (
        <div className={style.containerCenterHorizontal}>
            <div className={style.frame46}>
                <div className={style.works}>
                    <div className={style.title}>
                        <div className={style.text2}>работы</div>
                    </div>
                    <div className={style.overlapGroup2}>
                        <div className={style.overlapGroup1}>
                            <div className={style.watckAll}>
                                <div className={style.overlapGroup}>
                                    <div className={style.rectangle141}></div>
                                    <div className={style.rectangle142}></div>
                                </div>
                                <div className={style.text1}>все работы</div>
                            </div>
                            <div className={style.elipse41}></div>
                        </div>
                        <div className={style.photos}>
                            <div className={style.flexCol}>
                                <div className={style.imageContainer}>
                                    <Image
                                        className='image5'
                                        src={tatImg}
                                        width={200 / 2}
                                        height={400 / 2}
                                        alt='123'
                                    />
                                    <Image
                                        className='image6'
                                        src={tatImg}
                                        width={200 / 2}
                                        height={400 / 2}
                                        alt='123'
                                    />
                                    <Image
                                        className='image7'
                                        src={tatImg}
                                        width={200 / 2}
                                        height={400 / 2}
                                        alt='123'
                                    />
                                </div>
                                <div className={style.imageContainer1}>
                                    <Image
                                        className='image9'
                                        src={tatImg}
                                        width={200 / 2}
                                        height={400 / 2}
                                        alt='123'
                                    />
                                    <Image
                                        className='image10'
                                        src={tatImg}
                                        width={200 / 2}
                                        height={400 / 2}
                                        alt='123'
                                    />
                                </div>
                                <Image
                                    className='image4'
                                    src={tatImg}
                                    width={200 / 2}
                                    height={400 / 2}
                                    alt='123'
                                />
                            </div>
                            <div className={style.flexRow}>
                                <div className={style.imageContainer2}>
                                    <Image
                                        className='image8'
                                        src={tatImg}
                                        width={200 / 2}
                                        height={400 / 2}
                                        alt='123'
                                    />
                                    <Image
                                        className='image12'
                                        src={tatImg}
                                        width={200 / 2}
                                        height={400 / 2}
                                        alt='123'
                                    />
                                </div>
                                <Image
                                    className='image11'
                                    src={tatImg}
                                    width={200 / 2}
                                    height={400 / 2}
                                    alt='123'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;
