import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@/ui/button';

import style from './style.module.scss';

import tatImg from '../../assets/tattoo1.jpg';

const Works = () => {
    return (
        <section className='bg-black'>
            <div className='container mx-auto'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row gap-8 relative'>
                        <Image
                            style={{ width: '350px', height: '500px' }}
                            src={tatImg}
                            alt='firstImg'
                        />
                        <Image
                            className='absolute top-[300px] left-[400px]'
                            style={{ width: '250px', height: '250px' }}
                            src={tatImg}
                            alt='firstImg'
                        />
                    </div>

                    {/* <div className='flex flex-row gap-8 relative'>
                        <div className='flex flex-row'>
                            <Image
                                className='absolute top-[500px]'
                                style={{ width: '500px', height: '700px' }}
                                src={tatImg}
                                alt='firstImg'
                            />
                            <Image
                                className='absolute left-[300px]'
                                style={{ width: '250px', height: '350px' }}
                                src={tatImg}
                                // width={500 / 2}
                                // height={700 / 2}
                                alt='firstImg'
                            />
                        </div>
                    </div> */}

                    <div>
                        <Image
                            style={{ width: '300px', height: '350px' }}
                            src={tatImg}
                            alt='firstImg'
                        />
                    </div>
                </div>

                <div className='pt-[300px]'>
                    <div>
                        <Image
                            className='min-h-screen min-w-full'
                            src={tatImg}
                            alt='firstImg'
                        />
                    </div>
                </div>

                <div className='flex flex-row justify-between py-[300px]'>
                    <div className='flex flex-row gap-8 relative'>
                        <Image
                            style={{ width: '250px', height: '250px' }}
                            src={tatImg}
                            alt='firstImg'
                        />
                        <Image
                            className='absolute top-[300px] left-[100px]'
                            style={{ width: '300px', height: '350px' }}
                            src={tatImg}
                            alt='firstImg'
                        />
                    </div>

                    <div>
                        <Image
                            style={{ width: '400px', height: '550px' }}
                            src={tatImg}
                            alt='firstImg'
                        />
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <Button className='w-[192px] h-[192px] rounded-full text-white outline outline-offset-2 outline-1'>
                        <span>все работыы</span>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Works;
