import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import PlausibleProvider from "next-plausible";


const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Tech with Marco',
    description: 'Your go to YouTube channel for tech tutorials',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <PlausibleProvider
                domain="techwithmarco.com"
                customDomain="https://plausible.hosting.marco-greiveldinger.de"
                selfHosted={true}
                trackOutboundLinks={true}
            />
        </head>
        <body className={inter.className}>{children}</body>
        </html>
    )
}
