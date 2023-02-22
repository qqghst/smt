import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import style from './style.module.scss';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar: React.FC = () => {
    const [nav, setNav] = useState(false);

    return (
        <section className='container mx-auto pt-[32px]'>
            <div className='flex flex-row'>
                <div>лого</div>
                <div
                    className={
                        nav
                            ? [style.menu, style.active].join(' ')
                            : [style.menu]
                    }>
                    <ul className={style.firstUl}>
                        <li>о студии</li>
                        <li>услуги</li>
                        <li>работы</li>
                    </ul>
                    <ul className={style.secondUl}>
                        <li>+7 (909) 399-123-45</li>
                        <li>
                            <button className='underline'>
                                записаться на сеанс
                            </button>
                        </li>
                    </ul>
                </div>
                <div
                    onClick={() => setNav(!nav)}
                    className={style.mobile_btn}>
                    {nav ? (
                        <AiOutlineClose size={25} color={'white'}/>
                    ) : (
                        <AiOutlineMenu size={25} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Navbar;
