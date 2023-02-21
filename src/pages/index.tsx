import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/navbar/navbar';
import Masthead from '@/components/masthead/masthead';
import About from '@/components/about/about';
import Services from '@/components/services/services';
import Works from '@/components/works/works';
import Footer from '@/components/footer/index';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Navbar />
            <Masthead />
            <About />
            <Services />
            {/* <Works /> */}
            <Footer />
        </>
    );
}
