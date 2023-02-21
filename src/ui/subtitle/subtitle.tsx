import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './subtitle.module.scss';

interface IButtonProps {
    // type: 'button' | 'submit' | 'reset',
    // onClick?: (event: React.MouseEvent) => void,
    // children: React.ReactNode,
    // icon?: any,
    // className?: string,
    subtitle: string,
}

const subtitle: React.FC<IButtonProps> = ({ subtitle }) => {
    return (
        <>
            <button className={style.button}>{subtitle}</button>
        </>
    );
};

export default subtitle;
