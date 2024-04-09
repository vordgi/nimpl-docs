import './globals.css';

type AppProps = {
    Component: React.FC;
    pageProps: Record<string, unknown>;
}

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className="text-neutral-900">
            <Component {...pageProps} />
        </main>
    )
}
