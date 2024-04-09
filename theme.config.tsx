import { useConfig, type DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
    logo: (
        <svg width={66} height={24} viewBox="0 0 88 32" className="text-neutral-900">
            <path d="M27.5159 6.49047C27.5159 5.88462 28.0071 5.39349 28.6129 5.39349H30.8069C31.4127 5.39349 31.9039 5.88462 31.9039 6.49047V30.8983C31.9039 31.5041 31.4127 31.9953 30.8069 31.9953H28.6129C28.0071 31.9953 27.5159 31.5041 27.5159 30.8983V6.49047Z" fill="currentColor"/>
            <path d="M34.8291 19.9285C34.8291 19.3226 35.3203 18.8315 35.9261 18.8315H38.1201C38.7259 18.8315 39.2171 19.3226 39.2171 19.9285V30.8983C39.2171 31.5041 38.7259 31.9953 38.1201 31.9953H35.9261C35.3203 31.9953 34.8291 31.5041 34.8291 30.8983V19.9285Z" fill="currentColor"/>
            <path d="M42.1423 6.49047C42.1423 5.88462 42.6335 5.39349 43.2393 5.39349H45.4333C46.0391 5.39349 46.5303 5.88462 46.5303 6.49047V30.8983C46.5303 31.5041 46.0391 31.9953 45.4333 31.9953H43.2393C42.6335 31.9953 42.1423 31.5041 42.1423 30.8983V6.49047Z" fill="currentColor"/>
            <path d="M58.9627 6.49047C58.9627 5.88462 59.4538 5.39349 60.0597 5.39349H62.2536C62.8595 5.39349 63.3506 5.88462 63.3506 6.49047V17.4603C63.3506 18.0661 62.8595 18.5573 62.2536 18.5573H60.0597C59.4538 18.5573 58.9627 18.0661 58.9627 17.4603V6.49047Z" fill="currentColor"/>
            <path d="M51.6495 6.49047C51.6495 5.88462 52.1406 5.39349 52.7465 5.39349H54.9404C55.5463 5.39349 56.0374 5.88462 56.0374 6.49047V30.8983C56.0374 31.5041 55.5463 31.9953 54.9404 31.9953H52.7465C52.1406 31.9953 51.6495 31.5041 51.6495 30.8983V6.49047Z" fill="currentColor"/>
            <path d="M83.0963 19.9285C83.0963 19.3226 83.5874 18.8315 84.1933 18.8315H86.3872C86.9931 18.8315 87.4842 19.3226 87.4842 19.9285V30.8983C87.4842 31.5041 86.9931 31.9953 86.3872 31.9953H84.1933C83.5874 31.9953 83.0963 31.5041 83.0963 30.8983V19.9285Z" fill="currentColor"/>
            <path d="M75.7831 28.7043C75.7831 28.0985 76.2742 27.6073 76.8801 27.6073H79.074C79.6799 27.6073 80.171 28.0985 80.171 28.7043V30.8983C80.171 31.5041 79.6799 31.9953 79.074 31.9953H76.8801C76.2742 31.9953 75.7831 31.5041 75.7831 30.8983V28.7043Z" fill="currentColor"/>
            <path d="M68.4699 6.49047C68.4699 5.88462 68.961 5.39349 69.5668 5.39349H71.7608C72.3667 5.39349 72.8578 5.88462 72.8578 6.49047V30.8983C72.8578 31.5041 72.3667 31.9953 71.7608 31.9953H69.5668C68.961 31.9953 68.4699 31.5041 68.4699 30.8983V6.49047Z" fill="currentColor"/>
            <path d="M18.0088 1.09698C18.0088 0.491135 18.4999 0 19.1057 0H21.2997C21.9056 0 22.3967 0.491135 22.3967 1.09698V3.29094C22.3967 3.89679 21.9056 4.38792 21.2997 4.38792H19.1057C18.4999 4.38792 18.0088 3.89679 18.0088 3.29094V1.09698Z" fill="currentColor"/>
            <path d="M1.09698 0H3.29094C3.69698 0 4.05149 0.220603 4.24117 0.54849L18.0088 22.9224V6.49047C18.0088 5.88462 18.4999 5.39349 19.1057 5.39349H21.2997C21.9056 5.39349 22.3967 5.88462 22.3967 6.49047V30.8983C22.3967 31.5041 21.9056 31.9953 21.2997 31.9953C21.2997 31.9953 19.6663 32 19.0603 32C18.69 32.0013 18.328 31.8151 18.1203 31.4763L4.38792 9.08347V30.8983C4.38792 31.5041 3.89679 31.9953 3.29094 31.9953H1.09698C0.491135 31.9953 0 31.5041 0 30.8983V1.09698C0 0.491135 0.491135 0 1.09698 0Z" fill="currentColor"/>
        </svg>
    ),
    project: {
        link: 'https://github.com/vordgi'
    },
    footer: {
        content: function useText() {
            return (
                '© 2024 nimpl'
            )
        }
    },
    docsRepositoryBase: 'https://github.com/vordgi/nimpl-docs/tree/main',
    head: function useHead() {
        const config = useConfig<{ description?: string; image?: string }>();
        const title = `${config.title} | nimpl`;
        return (
            <>
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="nimpl docs" />
                <meta property="og:description" content="nimpl docs" />
                <meta
                    property="og:image"
                    content="https://nimpl.tech/preview.png"
                />
            </>
        )
    }
}

export default config;
