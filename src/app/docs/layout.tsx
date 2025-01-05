import type { Metadata } from "next";
import { DocsContainer, KeylinkToNavigation } from "robindoc";

import { Sidebar } from "./robindoc";

export const metadata: Metadata = {
    title: {
      template: '%s | Nimpl Solutions',
      default: 'Nimpl Solutions Documentation',
    },
    description: "Nimpl Solutions Documentation",
};

export default function RootLayout({
    children,
}: Readonly<{ children?: React.ReactNode }>) {
    return (
        <DocsContainer>
            <Sidebar />
            {children}
            <KeylinkToNavigation />
        </DocsContainer>
    );
}
