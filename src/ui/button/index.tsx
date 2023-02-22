import React from 'react';
import style from './index.module.scss';

interface IButtonProps {
    children: React.ReactNode,
    className?: string,
}

const button: React.FC<IButtonProps> = ({children, className}) => {
    return (
        <>
            <button className={className}>
                {children}
            </button>
        </>
    );
};

export default button;
