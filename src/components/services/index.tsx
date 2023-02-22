import React from 'react';

import style from './style.module.scss';

import ServicesItem from './servicesItem';

import Subtitle from '@/ui/title';

const services: React.FC = () => {
    return (
        <section className='bg-black'>
            <div className='container mx-auto'>
                <Subtitle subtitle={'услуги'} />
                <ServicesItem title={'TATTOO'} subtitle={'BRADING'}/>
                <ServicesItem title={'ALSMNALJD'} subtitle={'BRADING'}/>
                <ServicesItem title={'SLKMAZ1'} subtitle={'BRADING'}/>
                <ServicesItem title={'as;j'} subtitle={'BRADING'}/>
            </div>
        </section>
    );
};

export default services;
