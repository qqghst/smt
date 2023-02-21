import React from 'react';
import style from './button.module.scss';

interface IButtonProps {
    text: string;
}

const button: React.FC<IButtonProps> = ({text}) => {
    return (
        <>
            <button className={style.button}>{text}</button>
        </>
    );
};

export default button;
