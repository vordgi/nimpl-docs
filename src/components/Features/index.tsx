import styles from './styles.module.scss';

const Features = () => (
    <div className="grid sm:max-xl:grid-cols-2 xl:grid-cols-3 gap-8 items-start">
        <div className={`${styles["nimpl-feature-1"]} overflow-hidden flex flex-col justify-between relative bg-neutral-50 rounded-xl p-8 h-48`}>
            <p className="font-semibold text-2xl font-geist">Inspired by next.js</p>
            <div className="relative h-4 w-full">
                <span className="absolute block h-4 w-4 bg-[#D20062] rounded-2xl" />
                <span className={`${styles['nimpl-dot-1']} absolute block h-2 w-2 bg-[#D20062] rounded-2xl top-1 left-1`} />
                <span className={`${styles['nimpl-dot-2']} absolute block h-2 w-2 bg-[#D20062] rounded-2xl top-1 left-1`} />
                <span className={`${styles['nimpl-dot-3']} absolute block h-2 w-2 bg-[#D20062] rounded-2xl top-1 left-1`} />
                <span className={`${styles['nimpl-dot-4']} absolute block h-2 w-2 bg-[#D20062] rounded-2xl top-1 left-1`} />
                <span className="absolute block h-4 w-4 bg-[#5356FF] rounded-2xl left-1/4 -translate-x-1/4" />
                <span className="absolute block h-4 w-4 bg-[#5356FF] rounded-2xl left-1/2 -translate-x-1/2" />
                <span className="absolute block h-4 w-4 bg-[#5356FF] rounded-2xl left-3/4 -translate-x-3/4" />
                <span className="absolute block h-4 w-4 bg-[#5356FF] rounded-2xl left-full -translate-x-full" />
            </div>
        </div>
        <div className={`${styles["nimpl-feature-2"]} overflow-hidden flex flex-col justify-between relative bg-neutral-50 rounded-xl p-8 h-48`}>
            <p className="font-semibold text-2xl font-geist">Uses the latest features</p>
            <div className="relative h-4 w-full">
                <span className={`${styles['nimpl-line']}`} />
                <span className="absolute block h-4 w-4 bg-[#D20062] rounded-2xl" />
                <span className={`${styles['nimpl-lf-dot-2']} absolute block h-4 w-4 bg-neutral-600 rounded-2xl left-1/2 -translate-x-1/2`} />
                <span className="absolute block h-4 w-4 bg-[#5356FF] rounded-2xl left-full -translate-x-full" />
            </div>
        </div>
        <div className={`${styles["nimpl-feature-3"]} overflow-hidden flex flex-col justify-between relative bg-neutral-50 rounded-xl p-8 h-48`}>
            <p className="font-semibold text-2xl font-geist">Adapted for App Router</p>
            <div className="relative h-4 w-full">
                <span className={`${styles['nimpl-ad-line']}`} />
                <span className={`${styles['nimpl-ad-dot-1']} absolute block h-4 w-4 bg-[#5356FF] rounded-2xl left-1/4 -translate-x-1/4`} />
                <span className={`${styles['nimpl-ad-dot-2']} absolute block h-4 w-4 bg-[#5356FF] rounded-2xl left-1/2 -translate-x-1/2`} />
                <span className={`${styles['nimpl-ad-dot-3']} absolute block h-4 w-4 bg-[#5356FF] rounded-2xl left-3/4 -translate-x-3/4`} />
            </div>
        </div>
    </div>
)

export default Features;