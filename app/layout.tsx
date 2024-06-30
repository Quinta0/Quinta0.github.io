import { Noto_Sans_Thaana } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ReactNode } from 'react'

const noto_sans_thaana = Noto_Sans_Thaana({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-noto_sans_thaana',
})

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
        <body className={`${noto_sans_thaana.variable}`}>
        <Navbar />
        {children}
        <Footer />
        </body>
        </html>
    )
}
