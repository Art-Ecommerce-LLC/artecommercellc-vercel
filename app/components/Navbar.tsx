"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // lock the scroll when the mobile menu is open
    if (isMobileMenuOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return (
        <nav className="flex items-center justify-between bg-white p-4 shadow relative z-20">
            <div className="flex items-center z-30">
                <a href="/">
                    <Image 
                    src={`/logo_dark.png`} 
                    alt="Logo" 
                    width={190}
                    height={190}
                    style={{height: 'auto'}}
                    priority={true}
                    quality={70} />
                </a>
            </div>
            
           {/* Desktop Menu */}
           <div className="hidden custom-md:flex items-center space-x-4 custom-md:space-x-8 mr-8">
                <a
                    href="/"
                    className="text-gray-800 hover:bg-[var(--nav-bg-color)] hover:text-[var(--hover-text-color)] transition-colors duration-300 ease-in-out px-4 py-2 rounded-md"
                >
                    Home
                </a>
                <a
                    href="/about"
                    className="text-gray-800 hover:bg-[var(--nav-bg-color)] hover:text-[var(--hover-text-color)] transition-colors duration-300 ease-in-out px-4 py-2 rounded-md"
                >
                    About
                </a>
                <a
                    href="/contact"
                    className="text-gray-800 hover:bg-[var(--nav-bg-color)] hover:text-[var(--hover-text-color)] transition-colors duration-300 ease-in-out px-4 py-2 rounded-md"
                >
                    Contact
                </a>
                <a
                    href="/community"
                    className="text-gray-800 hover:bg-[var(--nav-bg-color)] hover:text-[var(--hover-text-color)] transition-colors duration-300 ease-in-out px-4 py-2 rounded-md"
                >
                    Community
                </a>
                <a
                    href="/pricing"
                    className="text-gray-800 hover:bg-[var(--nav-bg-color)] hover:text-[var(--hover-text-color)] transition-colors duration-300 ease-in-out px-4 py-2 rounded-md"
                >
                    Pricing
                </a>
            </div>

            <div className="custom-md:hidden flex items-center z-30">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-gray-800 focus:outline-none"
                >
                    <div className="relative w-8 h-6 flex items-center justify-center">
                        <div
                            className={`absolute h-0.5 w-6 bg-gray-800 transform transition-transform duration-300 ease-in-out ${
                                isMobileMenuOpen ? 'rotate-45' : '-translate-y-2'
                            }`}
                        />
                        <div
                            className={`absolute h-0.5 w-6 bg-gray-800 transform transition-opacity duration-300 ease-in-out ${
                                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                            }`}
                        />
                        <div
                            className={`absolute h-0.5 w-6 bg-gray-800 transform transition-transform duration-300 ease-in-out ${
                                isMobileMenuOpen ? '-rotate-45' : 'translate-y-2'
                            }`}
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 top-[70px] w-full h-[calc(100%-70px)] bg-[var(--navbar-color)] z-999 flex flex-col justify-center items-center overflow-hidden custom-md:hidden">
                    <a
                        href="/"
                        className="w-full text-center text-[var(--navbar-text-color)] text-xl py-4 border-b border-black last:border-none hover:bg-[var(--navbar-hover-background-color)] hover:text-white transition-colors duration-300 ease-in-out"
                    >
                        Home
                    </a>
                    <a
                        href="/about"
                        className="w-full text-center text-[var(--navbar-text-color)] text-xl py-4 border-b border-black last:border-none hover:bg-[var(--navbar-hover-background-color)] hover:text-white transition-colors duration-300 ease-in-out"
                    >
                        About
                    </a>
                    <a
                        href="/contact"
                        className="w-full text-center text-[var(--navbar-text-color)] text-xl py-4 border-b border-black last:border-none hover:bg-[var(--navbar-hover-background-color)] hover:text-white transition-colors duration-300 ease-in-out"
                    >
                        Contact
                    </a>
                    <a
                        href="/community"
                        className="w-full text-center text-[var(--navbar-text-color)] text-xl py-4 border-b border-black last:border-none hover:bg-[var(--navbar-hover-background-color)] hover:text-white transition-colors duration-300 ease-in-out"
                    >
                        Community
                    </a>
                    <a
                        href="/pricing"
                        className="w-full text-center text-[var(--navbar-text-color)] text-xl py-4 hover:bg-[var(--navbar-hover-background-color)] hover:text-white transition-colors duration-300 ease-in-out"
                    >
                        Pricing
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
