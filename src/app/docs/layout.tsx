import type { Metadata } from "next";
import { Main, KeylinkToNavigation } from "robindoc";

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
}: Readonly<{ children?: JSX.Element }>) {
    return (
        <Main>
            <Sidebar />
            {children}
            <KeylinkToNavigation />
        </Main>
    );
}
