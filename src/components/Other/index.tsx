import styles from './styles.module.scss';

const Other = () => (
    <section className="pt-32 pb-32 mb-32">
        <div className="container">
            <div className={styles["bg-anim"]}>
                <div className="lg:flex border-t-2 border-b-2 border-neutral-100 border-dashed">
                    <div className="lg:border-r-2 border-neutral-100 border-dashed">
                        <p className="text-4xl h-full lg:w-60 font-medium pt-8 pr-8 pb-8 bg-base-0 font-geist">Motivation</p>
                    </div>
                    <p className="text-2xl flex-1 lg:pt-8 pb-8 lg:pl-8 bg-base-0">
                        Next.js implements a lot of functionality from release to release. Many innovations are extremely useful, but they have critical differences. These changes can hinder the transition to new versions and new approaches.
                    </p>
                </div>
                <div className="lg:flex border-b-2 border-neutral-100 border-dashed">
                    <div className="lg:border-r-2 border-neutral-100 border-dashed">
                        <p className="text-4xl h-full lg:w-60 font-medium pt-8 pr-8 pb-8 bg-base-0 font-geist">Plans</p>
                    </div>
                    <p className="text-2xl flex-1 lg:pt-8 pb-8 lg:pl-8 bg-base-0">Much desired functionality for next.js is still not implemented out of the box. This family of packages solves common next.js tasks. <br />Plans include creating several more packages and continuing to improve existing ones.</p>
                </div>
                <div className="lg:flex border-b-2 border-neutral-100 border-dashed">
                    <div className="lg:border-r-2 border-neutral-100 border-dashed">
                        <p className="text-4xl h-full lg:w-60 font-medium pt-8 pr-8 pb-8 bg-base-0 font-geist">Additional</p>
                    </div>
                    <p className="text-2xl flex-1 lg:pt-8 pb-8 lg:pl-8 bg-base-0">If you have ideas, difficulties, wishes - do not hesitate to create issues. Community is what makes solutions better. <br />Let's make the web not only faster, but also easier together.</p>
                </div>
            </div>
        </div>
    </section>
)

export default Other;