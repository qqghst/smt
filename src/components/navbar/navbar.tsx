import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './navbar.module.scss';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar: React.FC = () => {
    const [nav, setNav] = useState(false);

    return (
        // <section className='container mx-auto pt-[32px]'>
        //         <div className='flex flex-row'>
        //             <div>лого</div>
        //             <ul className='flex flex-row gap-[56px] pl-[291px] pr-[246px]'>
        //                 <li>о студии</li>
        //                 <li>услуги</li>
        //                 <li>работы</li>
        //             </ul>
        //             <ul className='flex flex-row gap-[56px]'>
        //                 <li>+7 (909) 399-123-45</li>
        //                 <li>
        //                     <button className='underline'>
        //                         записаться на сеанс
        //                     </button>
        //                 </li>
        //             </ul>
        //         </div>
        // </section>
        <header className={style.header}>
            <div className='container'>
                <div className={style.box}>
                    <div className={style.logo_image}></div>
                    <ul
                        className={
                            nav
                                ? [style.menu, style.active].join(' ')
                                : [style.menu]
                        }>
                        <li>
                            <a href='##'>Product</a>
                        </li>
                        <li>
                            <a href='##'>About Us</a>
                        </li>
                        <li>
                            <a href='##'>Customers</a>
                        </li>
                        <li>
                            <a href='##'>Price</a>
                        </li>
                        <li>
                            <a href='##'>Contacts</a>
                        </li>
                    </ul>
                    <div
                        onClick={() => setNav(!nav)}
                        className={style.mobile_btn}>
                        {nav ? (
                            <AiOutlineClose size={25} />
                        ) : (
                            <AiOutlineMenu size={25} />
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
