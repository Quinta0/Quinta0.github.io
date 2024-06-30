import Link from "next/link";

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
                <Link href="/#projects" className="text-sm text-[#e3eefc] font-medium hover:underline underline-offset-4"
                      prefetch={false}>
                    Projects
                </Link>
                <Link href="/#contact" className="text-sm text-[#e3eefc] font-medium hover:underline underline-offset-4"
                      prefetch={false}>
                    Contact
                </Link>
            </div>
        </div>
    );
}
