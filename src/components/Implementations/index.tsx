import styles from './styles.module.scss';

const Implementations = () => (
    <section className="py-10 sm:py-24 lg:py-32" id="implementations">
        <div className="container">
            <div>
                <h2 className="text-3xl mb-6 font-geist">UI/UX Implementations</h2>
                <div className="grid sm:max-xl:grid-cols-2 xl:grid-cols-3 gap-8 items-start">
                    <a href="/getters" className={`${styles["nimpl-card"]} block relative bg-neutral-100 rounded-xl p-8`}>
                        <p className="font-semibold text-2xl font-geist">@nimpl/getters</p>
                        <p className="text-xl mt-4">Server getters and Server contexts for RSC without switching to SSR</p>
                    </a>
                    <a href="/i18n" className={`${styles["nimpl-card"]} block relative bg-neutral-100 rounded-xl p-8`}>
                        <p className="font-semibold text-2xl font-geist">@nimpl/i18n</p>
                        <p className="text-xl mt-4">Internationalization library for React.js with an enabled server component</p>
                    </a>
                    <a href="/context" className={`${styles["nimpl-card"]} block relative bg-neutral-100 rounded-xl p-8`}>
                        <p className="font-semibold text-2xl font-geist">@nimpl/context</p>
                        <p className="text-xl mt-4">Server contexts for RSC without switching to SSR</p>
                    </a>
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-3xl mb-6 font-geist">Configuration Implementations</h2>
                <div className="grid sm:max-xl:grid-cols-2 xl:grid-cols-3 gap-8 items-start">
                    <a href="/classnames-minifier" className={`${styles["nimpl-card"]} block relative bg-neutral-100 rounded-xl p-8`}>
                        <p className="font-semibold text-2xl font-geist">@nimpl/classnames-minifier</p>
                        <p className="text-xl mt-4">Configuring style (css/scss/sass) modules to generate compressed classes</p>
                    </a>
                    <a href="/middleware-chain" className={`${styles["nimpl-card"]} block relative bg-neutral-100 rounded-xl p-8`}>
                        <p className="font-semibold text-2xl font-geist">@nimpl/middleware-chain</p>
                        <p className="text-xl mt-4">Create a chain of native next.js middlewares without any modifications</p>
                    </a>
                    <a href="/config" className={`${styles["nimpl-card"]} block relative bg-neutral-100 rounded-xl p-8`}>
                        <p className="font-semibold text-2xl font-geist">@nimpl/config</p>
                        <p className="text-xl mt-4">Convenient management of application configuration in different environments</p>
                    </a>
                    <a href="/ab-tests" className={`${styles["nimpl-card"]} block relative bg-neutral-100 rounded-xl p-8`}>
                        <p className="font-semibold text-2xl font-geist">@nimpl/ab-tests</p>
                        <p className="text-xl mt-4">A package for conducting A/B tests on a website using middleware</p>
                    </a>
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-3xl mb-6 font-geist">Cache Implementations</h2>
                <div className="grid sm:max-xl:grid-cols-2 xl:grid-cols-3 gap-8 items-start">
                    <a href="/cache-adapter" className={`${styles["nimpl-card"]} block relative bg-neutral-100 rounded-xl p-8`}>
                        <p className="font-semibold text-2xl font-geist">@nimpl/cache-adapter</p>
                        <p className="text-xl mt-4">An adapter that allows to use any cache handler on the client and server side and switch between them</p>
                    </a>
                    <a href="/cache-in-memory" className={`${styles["nimpl-card"]} block relative bg-neutral-100 rounded-xl p-8`}>
                        <p className="font-semibold text-2xl font-geist">@nimpl/cache-in-memory</p>
                        <p className="text-xl mt-4">Base cacheHandler for next.js, which cache data in-memory</p>
                    </a>
                </div>
            </div>
        </div>
    </section>
)

export default Implementations;