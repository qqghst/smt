import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import st from './masthead.module.scss';
import mastheadImage from '../../assets/tattoo1.jpg';

const Masthead: React.FC = () => {
    return (
        <section className='min-h-screen flex flex-col justify-center items-center'>
                <div className={`${st.masthead} container mx-auto flex justify-center items-center text-center`}>
                    <h1 className={st.mastheadText}>
                        <div className={st.sorry}>
                            <div>SORRY</div>
                        </div>
                        <div className={st.momTattoo}>
                            <div>MOM TATTOO</div>
                        </div>
                    </h1>
                    <div className={`${st.mastheadImage} `}>
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
