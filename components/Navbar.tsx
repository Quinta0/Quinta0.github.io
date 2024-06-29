import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

export default function Navbar() {

    return (
        <div className="fixed top-0 left-0 w-full bg-gray-950 z-30 py-2 px-4 md:px-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Link href="/" className="text-sm text-[#e3eefc] font-medium hover:underline underline-offset-4" prefetch={false}>
                    Home
                </Link>
                <Link href="/#about" className="text-sm text-[#e3eefc] font-medium hover:underline underline-offset-4" prefetch={false}>
                    About
                </Link>
                {/*<Link href="/#about" className="text-sm text-[#e3eefc] font-medium hover:underline underline-offset-4" prefetch={false}>*/}
                {/*    Experience*/}
                {/*</Link>*/}
                <Link href="/#projects" className="text-sm text-[#e3eefc] font-medium hover:underline underline-offset-4"
                      prefetch={false}>
                    Projects
                </Link>
                <Link href="/#contact" className="text-sm text-[#e3eefc] font-medium hover:underline underline-offset-4"
                      prefetch={false}>
                    Contact
                </Link>
            </div>
            <div className="flex items-center gap-2">
                <SunIcon className="h-5 w-5"/>
                <MoonIcon className="h-5 w-5"/>
            </div>
        </div>
    );
}

function MoonIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
        </svg>
    );
}

function SunIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2"/>
            <path d="M12 20v2"/>
            <path d="m4.93 4.93 1.41 1.41"/>
            <path d="m17.66 17.66 1.41 1.41"/>
            <path d="M2 12h2"/>
            <path d="M20 12h2"/>
            <path d="m6.34 17.66-1.41 1.41"/>
            <path d="m19.07 4.93-1.41 1.41"/>
        </svg>
    );
}