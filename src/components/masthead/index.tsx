import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import style from './style.module.scss';

import mastheadImage from '../../assets/tattoo1.jpg';

const Masthead: React.FC = () => {
    return (
        <section className='min-h-screen flex flex-col justify-center items-center'>
                <div className={`${style.masthead} container mx-auto flex justify-center items-center text-center`}>
                    <h1 className={style.mastheadText}>
                        <div className={style.sorry}>
                            <div>SORRY</div>
                        </div>
                        <div className={style.momTattoo}>
                            <div>MOM TATTOO</div>
                        </div>
                    </h1>
                    <div className={`${style.mastheadImage} `}>
                        <Image
                            src={mastheadImage}
                            alt='masthead-image'
                            width={800 / 2}
                            height={1200 / 2}
                        />
                    </div>
                </div>
        </section>

    );
};

export default Masthead;
