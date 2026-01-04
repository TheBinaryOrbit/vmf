"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import logo from '@/public/images/logo.png';
import Image from "next/image";

function Navbar() {
    const [open, setOpen] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const computeEndTarget = () => {
            const footerEl =
                document.querySelector("#site-footer") ||
                document.querySelector("footer");
            if (footerEl) {
                const rect = footerEl.getBoundingClientRect();
                return Math.max(1, rect.top + window.scrollY);
            }
            return Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        };

        let endTarget = computeEndTarget();

        const handleScroll = () => {
            const y = window.scrollY;
            const pct = Math.min(1, Math.max(0, y / endTarget));
            setProgress(pct);
        };

        const handleResize = () => {
            endTarget = computeEndTarget();
            handleScroll();
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const navLinkClasses = `
    relative pb-1
    after:content-[''] 
    after:absolute 
    after:left-0 
    after:bottom-0 
    after:w-full 
    after:h-[2px] 
    after:bg-[#910606] 
    after:scale-x-0 
    after:origin-left 
    after:transition-transform 
    after:duration-300 
    after:ease-out
    hover:after:scale-x-100
  `;

    return (
        <nav className="sticky top-0 z-[100] bg-white sm:pl-16 px-6 py-3 flex items-center justify-between shadow-md">
            {/* Progress track */}
            <div className="pointer-events-none absolute left-0 bottom-0 h-[2px] w-full bg-[#910606]/20" />
            {/* Progress bar */}
            <div
                className="pointer-events-none absolute left-0 bottom-0 h-[2px] bg-[#910606]"
                style={{ width: `${progress * 100}%` }}
            />

            <Link href="/" className="flex items-center gap-2">
                <Image 
                    src={logo}
                    alt="Logo"
                    width={200}
                    height={10}
                />
            </Link>

            <div className="hidden md:flex gap-8 text-[#000000] font-medium">
                <Link href="/" className={navLinkClasses}>Home</Link>

                <Link href="/service" className={navLinkClasses}>Services</Link>

                <Link href="/about" className={navLinkClasses}>About Us</Link>

                <Link href="/contact-us" className={navLinkClasses}>Contact Us</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden z-50"
                onClick={() => setOpen(!open)}
                aria-label="Open menu"

            >
                <span
                    className={`block w-6 h-0.5 bg-[#740404] mb-1 transition-all ${open ? "rotate-45 translate-y-2" : ""
                        }`}
                />
                <span
                    className={`block w-6 h-0.5 bg-[#740404] mb-1 transition-all ${open ? "opacity-0" : ""
                        }`}
                />
                <span
                    className={`block w-6 h-0.5 bg-[#740404] transition-all ${open ? "-rotate-45 -translate-y-2" : ""
                        }`}
                />
            </button>

            {/* Mobile Menu */}
            {open && (
                <div className="fixed inset-0 z-50">
                    <div
                        className="absolute inset-0 bg-black/30 bg-opacity-40"
                        onClick={() => setOpen(false)}
                    />
                    <div
                        className="absolute top-0 right-0 w-2/3 max-w-xs bg-[#740404] h-full shadow-lg p-6 flex flex-col gap-6 animate-slide-in"
                        style={{ zIndex: 51 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Link href="/" className={navLinkClasses} onClick={() => setOpen(false)}>Home</Link>

                        <Link href="/service" className={navLinkClasses} onClick={() => setOpen(false)}>Services</Link>

                        <Link href="/about" className={navLinkClasses} onClick={() => setOpen(false)}>About Us</Link>
                        <Link href="/contact-us" className={navLinkClasses} onClick={() => setOpen(false)}>Contact Us</Link>

                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;