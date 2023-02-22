import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';

import Navbar from '@/components/navbar';
import Masthead from '@/components/masthead';
import Featured from '@/components/featured';
import About from '@/components/about';
import Services from '@/components/services';
import Works from '@/components/works';
import Works2 from '@/components/works2';
import Footer from '@/components/footer';


const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <div
                className='main-container'
                id='main-container'>
                <Navbar />
                <Masthead />
                <Featured />
                <About />
                <Services />
                {/* <Works /> */}
                <Works2 />
                <Footer />
            </div>
        </>
    );
}
