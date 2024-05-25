import styles from './styles.module.scss';

const Features = () => (
    <>
        <div className="grid sm:max-xl:grid-cols-2 xl:grid-cols-3 gap-8 items-start">
            <div className={`${styles["bg-circles"]} after:hidden before:top-0 before:left-1/2 overflow-hidden flex flex-col justify-between relative bg-neutral-50 rounded-xl p-8 h-48`}>
                <p className="font-semibold text-2xl font-geist">Inspired by next.js</p>
                <div className="relative h-4 w-full">
                    <span className="absolute block h-4 w-4 bg-dye-pink rounded-md" />
                    <span className={`${styles['f1-dot-1']} absolute block h-2 w-2 bg-dye-pink rounded-md top-1 left-1`} />
                    <span className={`${styles['f1-dot-2']} absolute block h-2 w-2 bg-dye-pink rounded-md top-1 left-1`} />
                    <span className={`${styles['f1-dot-3']} absolute block h-2 w-2 bg-dye-pink rounded-md top-1 left-1`} />
                    <span className={`${styles['f1-dot-4']} absolute block h-2 w-2 bg-dye-pink rounded-md top-1 left-1`} />
                    <span className="absolute block h-4 w-4 bg-dye-blue rounded-md left-1/4 -translate-x-1/4" />
                    <span className="absolute block h-4 w-4 bg-dye-blue rounded-md left-1/2 -translate-x-1/2" />
                    <span className="absolute block h-4 w-4 bg-dye-blue rounded-md left-3/4 -translate-x-3/4" />
                    <span className="absolute block h-4 w-4 bg-dye-blue rounded-md left-full -translate-x-full" />
                </div>
            </div>
            <div className={`${styles["bg-circles"]} before:bottom-0 before:left-30 after:bottom-0 after:right-0 overflow-hidden flex flex-col justify-between relative bg-neutral-50 rounded-xl p-8 h-48`}>
                <p className="font-semibold text-2xl font-geist">Uses the latest features</p>
                <div className="relative h-4 w-full">
                    <span className={`${styles['f2-line']} absolute w-full h-1.5 rounded top-[5px]`} />
                    <span className="absolute block h-4 w-4 bg-dye-pink rounded-md" />
                    <span className={`${styles['f2-dot-2']} absolute block h-4 w-4 bg-neutral-600 rounded-md left-1/2 -translate-x-1/2`} />
                    <span className="absolute block h-4 w-4 bg-dye-blue rounded-md left-full -translate-x-full" />
                </div>
            </div>
            <div className={`${styles["bg-circles"]} before:top-1/4 before:left-1/4 after:bottom-4 after:right-6 overflow-hidden flex flex-col justify-between relative bg-neutral-50 rounded-xl p-8 h-48`}>
                <p className="font-semibold text-2xl font-geist">Adapted for App Router</p>
                <div className="relative h-4 w-full">
                    <span className={`${styles['f3-line']} absolute w-full h-1.5 rounded top-[5px]`} />
                    <span className={`${styles['f3-dot-1']} absolute block h-4 w-4 bg-dye-blue rounded-md left-1/4 -translate-x-1/4`} />
                    <span className={`${styles['f3-dot-2']} absolute block h-4 w-4 bg-dye-blue rounded-md left-1/2 -translate-x-1/2`} />
                    <span className={`${styles['f3-dot-3']} absolute block h-4 w-4 bg-dye-blue rounded-md left-3/4 -translate-x-3/4`} />
                </div>
            </div>
        </div>
        <div className="grid sm:max-xl:grid-cols-2 xl:grid-cols-2 gap-8 items-start mt-8">
            <div className={`${styles["bg-circles"]} before:right-0 before:bottom-4 after:top-4 after:left-20 overflow-hidden flex flex-col justify-between relative bg-neutral-50 rounded-xl p-8 h-48`}>
                <p className="font-semibold text-2xl font-geist">Plug-and-Play solutions</p>
                <div className="relative h-4 w-full">
                    <span className="absolute block h-4 w-4 bg-dye-pink rounded-md right-0" />
                    <span className={`${styles['f4-dot-1']} absolute block h-2 w-2 bg-neutral-600 rounded-sm top-1 left-1`} />
                    <span className={`${styles['f4-dot-2']} absolute block h-2 w-2 bg-neutral-600 rounded-sm top-1 left-1`} />
                    <span className={`${styles['f4-dot-3']} absolute block h-2 w-2 bg-neutral-600 rounded-sm top-1 left-1`} />
                    <span className={`${styles['f4-dot-4']} absolute block h-2 w-2 bg-neutral-600 rounded-sm top-1 left-1`} />
                    <span className="absolute block h-4 w-4 bg-neutral-500 rounded-md left-0" />
                    <span className="absolute block h-4 w-4 bg-dye-blue rounded-md left-1/2 -translate-x-1/2" />
                </div>
            </div>
            <div className={`${styles["bg-circles"]} before:hidden after:bottom-6 after:left-1/2 overflow-hidden flex flex-col justify-between relative bg-neutral-50 rounded-xl p-8 h-48`}>
                <p className="font-semibold text-2xl font-geist">Simple and Fast APIs</p>
                <div className="relative h-4 w-full">
                    <span className="absolute block h-4 w-4 bg-dye-blue rounded-md left-0" />
                    <span className="absolute block h-4 w-4 bg-neutral-500 rounded-md left-1/2 -translate-x-1/2" />
                    <span className="absolute block h-4 w-4 bg-dye-blue rounded-md right-0" />
                    <span className={`${styles['f5-dot-1']} absolute block h-3 w-3 bg-dye-blue rounded top-0.5 left-0.5`} />
                    <span className={`${styles['f5-dot-2']} absolute block h-3 w-3 bg-dye-blue rounded top-0.5 right-0.5`} />
                </div>
            </div>
        </div>
    </>
)

export default Features;