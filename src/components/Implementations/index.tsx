import styles from './styles.module.scss';

const Implementations = () => (
    <>
        <section>
            <h2 className="text-3xl mb-6">UI/UX Implementations</h2>
            <div className="grid sm:max-xl:grid-cols-2 xl:grid-cols-3 gap-8 items-start">
                <a href="/getters" className={`${styles["nimpl-card"]} block relative bg-neutral-100 rounded-xl p-8`}>
                    <p className="font-semibold text-2xl">@nimpl/getters</p>
                    <p className="text-xl mt-4">Server getters and Server contexts for RSC without switching to SSR</p>
                </a>
                <a href="/i18n" className={`${styles["nimpl-card"]} block relative bg-neutral-100 rounded-xl p-8`}>
                    <p className="font-semibold text-2xl">@nimpl/i18n</p>
                    <p className="text-xl mt-4">Internationalization library for React.js with an enabled server component</p>
                </a>
            </div>
        </section>
        <section className="mt-10">
            <h2 className="text-3xl mb-6">Configuration Implementations</h2>
            <div className="grid sm:max-xl:grid-cols-2 xl:grid-cols-3 gap-8 items-start">
                <a href="/classnames-minifier" className={`${styles["nimpl-card"]} block relative bg-neutral-100 rounded-xl p-8`}>
                    <p className="font-semibold text-2xl">@nimpl/classnames-minifier</p>
                    <p className="text-xl mt-4">Configuring style (css/scss/sass) modules to generate compressed classes</p>
                </a>
                <a href="/config" className={`${styles["nimpl-card"]} block relative bg-neutral-100 rounded-xl p-8`}>
                    <p className="font-semibold text-2xl">@nimpl/config</p>
                    <p className="text-xl mt-4">Convenient management of application configuration in different environments</p>
                </a>
                <a href="/ab-tests" className={`${styles["nimpl-card"]} block relative bg-neutral-100 rounded-xl p-8`}>
                    <p className="font-semibold text-2xl">@nimpl/ab-tests</p>
                    <p className="text-xl mt-4">A package for conducting A/B tests on a website using middleware</p>
                </a>
            </div>
        </section>
        <section className="mt-10">
            <h2 className="text-3xl mb-6">Cache Implementations</h2>
            <div className="grid sm:max-xl:grid-cols-2 xl:grid-cols-3 gap-8 items-start">
                <a href="/cache-adapter" className={`${styles["nimpl-card"]} block relative bg-neutral-100 rounded-xl p-8`}>
                    <p className="font-semibold text-2xl">@nimpl/cache-adapter</p>
                    <p className="text-xl mt-4">An adapter that allows to use any cache handler on the client and server side and switch between them</p>
                </a>
                <a href="/cache-in-memory" className={`${styles["nimpl-card"]} block relative bg-neutral-100 rounded-xl p-8`}>
                    <p className="font-semibold text-2xl">@nimpl/cache-in-memory</p>
                    <p className="text-xl mt-4">Base cacheHandler for next.js, which cache data in-memory</p>
                </a>
            </div>
        </section>
    </>
)

export default Implementations;