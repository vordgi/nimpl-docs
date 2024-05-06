import './globals.css';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';

const geist = localFont({
    src: '../assets/GeistVF.woff2',
    fallback: ['Inter', 'Segoe UI', 'ui-sans-serif', 'Roboto', 'Noto Sans', 'sans-serif'],
    variable: '--font-geist'
});

type AppProps = {
    Component: React.FC;
    pageProps: Record<string, unknown>;
}

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`text-neutral-900 ${geist.variable}`}>
            <Component {...pageProps} />
            <Analytics />
        </main>
    )
}
