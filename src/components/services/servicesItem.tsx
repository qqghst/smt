import React from 'react';

import style from './style.module.scss';

interface ITitleProps {
    title: string;
    subtitle: string;
}

const servicesItem: React.FC<ITitleProps> = ({title, subtitle}) => {
    return (
        <>
            <div className='flex flex-col gap-[24px]'>
                <div className={style.text}>
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                </div>
                <div className={style.line} />
            </div>
        </>
    );
};

export default servicesItem;
