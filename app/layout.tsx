// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Work_Sans } from 'next/font/google'
import './globals.css'

const work_sans = Work_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-work_sans',
})

// @ts-ignore
export default function Layout({ children }) {
    return (
        <html lang="en">
        <body className={work_sans.variable}>
        {children}
        </body>
        </html>
    )
}