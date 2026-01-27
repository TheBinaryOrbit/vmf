"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import logo from '@/public/images/logo.png';
import Image from "next/image";
import { Menu, X } from "lucide-react";

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
    after:bg-primary 
    after:scale-x-0 
    after:origin-left 
    after:transition-transform 
    after:duration-300 
    after:ease-out
    hover:after:scale-x-100
    text-secondary-darker
  `;

    const handleContactClick = (e) => {
        e.preventDefault();
        const target = document.getElementById('contact') || document.getElementById('consultation');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            setOpen(false);
            return;
        }
        // if not on same page, navigate to home with hash
        window.location.href = '/#contact';
    };

    return (
        <nav className="sticky top-0 z-[100] bg-primary-light sm:pl-16 px-6 py-3 flex items-center justify-between shadow-md">
            {/* Progress track */}
            <div className="pointer-events-none absolute left-0 bottom-0 h-[2px] w-full bg-primary/20" />
            {/* Progress bar */}
            <div
                className="pointer-events-none absolute left-0 bottom-0 h-[2px] bg-primary"
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

                <Link href="/award" className={navLinkClasses}>Award and Recognition</Link>

                <Link href="/whychooseus" className={navLinkClasses}>Why Choose Us</Link>

                <Link href="/contact" className={navLinkClasses}>Contact Us</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden z-50 bg-white p-2"
                onClick={() => setOpen(!open)}
                aria-label={open ? "Close menu" : "Open menu"}
            >
                {open ? (
                    <X className="w-6 h-6 text-secondary" />
                ) : (
                    <Menu className="w-6 h-6 text-secondary" />
                )}
            </button>

            {/* Mobile Menu */}
            {open && (
                <div className="fixed inset-0 z-30">
                    <div
                        className="absolute inset-0 bg-black/30 bg-opacity-40"
                        onClick={() => setOpen(false)}
                    />
                    <div
                        className="absolute top-0 right-0 w-2/3 max-w-xs bg-white h-full shadow-lg p-6 flex flex-col gap-6 animate-slide-in duration-700 ease-in-out pt-20"
                        style={{ zIndex: 51 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Link href="/" className={navLinkClasses} onClick={() => setOpen(false)}>Home</Link>

                        <Link href="/service" className={navLinkClasses} onClick={() => setOpen(false)}>Services</Link>

                        <Link href="/about" className={navLinkClasses} onClick={() => setOpen(false)}>About Us</Link>

                        <Link href="/whychooseus" className={navLinkClasses} onClick={() => setOpen(false)}>Why Choose Us</Link>

                        <Link href="/award" className={navLinkClasses} onClick={() => setOpen(false)}>Award and Recognition</Link>

                        <Link href="/contact" className={navLinkClasses} onClick={() => setOpen(false)}>Contact Us</Link>

                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;