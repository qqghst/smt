import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Cormorant_Garamond, Inter } from '@next/font/google';

const cormorantGaramond = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['400'],
});

const inter = Inter({
    subsets: ['latin'],
    weight: ['800']
})
export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={cormorantGaramond.className}>
            <Component {...pageProps} />
        </main>
    );
}
