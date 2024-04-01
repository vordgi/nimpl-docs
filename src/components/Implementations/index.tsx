const Implementations = () => (
    <div className="grid sm:max-xl:grid-cols-2 xl:grid-cols-3 gap-8 items-start">
        <a href="/getters" className="block bg-neutral-100 rounded-xl p-8 border-2 border-transparent hover:border-neutral-300">
            <p className="font-semibold text-2xl">@nimpl/getters</p>
            <p className="text-xl mt-4">Server getters and Server contexts for RSC without switching to SSR</p>
        </a>
        <a href="/i18n" className="block bg-neutral-100 rounded-xl p-8 border-2 border-transparent hover:border-neutral-300">
            <p className="font-semibold text-2xl">@nimpl/i18n</p>
            <p className="text-xl mt-4">Internationalization library for React.js with an enabled server component</p>
        </a>
        <a href="/config" className="block bg-neutral-100 rounded-xl p-8 border-2 border-transparent hover:border-neutral-300">
            <p className="font-semibold text-2xl">@nimpl/config</p>
            <p className="text-xl mt-4">Convenient management of application configuration in different environments</p>
        </a>
        <a href="/classnames-minifier" className="block bg-neutral-100 rounded-xl p-8 border-2 border-transparent hover:border-neutral-300">
            <p className="font-semibold text-2xl">@nimpl/classnames-minifier</p>
            <p className="text-xl mt-4">Configuring style (css/scss/sass) modules to generate compressed classes</p>
        </a>
        <a href="/cache-adapter" className="block bg-neutral-100 rounded-xl p-8 border-2 border-transparent hover:border-neutral-300">
            <p className="font-semibold text-2xl">@nimpl/cache-adapter</p>
            <p className="text-xl mt-4">An adapter that allows to use any cache handler on the client and server side and switch between them</p>
        </a>
        <a href="/cache-in-memory" className="block bg-neutral-100 rounded-xl p-8 border-2 border-transparent hover:border-neutral-300">
            <p className="font-semibold text-2xl">@nimpl/cache-in-memory</p>
            <p className="text-xl mt-4">Base cacheHandler for next.js, which cache data in-memory</p>
        </a>
    </div>
)

export default Implementations;