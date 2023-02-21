import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import style from './about.module.scss';


import Subtitle from '@/ui/subtitle/subtitle';
import Button from '@/ui/button/button';

const About: React.FC = () => {
    return (
        <section className='bg-black'>
            <div className='container mx-auto py-[120px]'>
                <Subtitle subtitle={'о нас'} />
                <div className={style.text}>
                    We’ve worked extensively in terms of geography and sector,
                    developinga variety of work — products, services, and
                    experiences — that has taughtus that a well-defined visual
                    strategy is key to bring visibility, credibility,and funds
                    to any organization. Starting in 2021, we decided to planta
                    tree for each client that we work with.
                </div>
                <Button text={'узнать больше'} />
            </div>
        </section>
    );
};

export default About;
