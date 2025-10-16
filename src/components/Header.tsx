"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId: string) => {
        document
            .getElementById(sectionId)
            ?.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
    };

    return (
        <header className="w-full absolute z-[10] top-0 text-white py-2 sm:py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-12 sm:h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-1 sm:gap-2">
                        <Image
                            src="/images/logo.webp"
                            alt="SellWithJoji"
                            className="w-8 h-8 sm:w-10 sm:h-10"
                            width={40}
                            height={40}
                        />
                        <p className="text-sm sm:text-base font-medium tracking-[1px] sm:tracking-[3px]">
                            Joji Foods
                        </p>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                        <nav className="flex space-x-6 xl:space-x-8">
                            <a
                                href="#about"
                                className="hover:text-[var(--color-navy)] transition-colors text-sm xl:text-base"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("about");
                                }}
                            >
                                About Us
                            </a>
                            <a
                                href="#features"
                                className="hover:text-[var(--color-navy)] transition-colors text-sm xl:text-base"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("features");
                                }}
                            >
                                Features
                            </a>
                            <a
                                href="#services"
                                className="hover:text-[var(--color-navy)] transition-colors text-sm xl:text-base"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("services");
                                }}
                            >
                                How It Works
                            </a>
                            <a
                                href="#stats"
                                className="hover:text-[var(--color-navy)] transition-colors text-sm xl:text-base"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("stats");
                                }}
                            >
                                Success Stories
                            </a>
                        </nav>

                        {/* CTA Button */}
                        <button
                            onClick={() =>
                                window.open(
                                    "https://docs.google.com/forms/d/e/1FAIpQLSfT1B8HymRS1CCEveSLe_j5IanAtE4VuKoV8-BZW8PM8ntT8w/viewform",
                                    "_blank"
                                )
                            }
                            className="bg-white text-black px-4 py-2 xl:px-6 xl:py-2 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2 text-sm xl:text-base"
                        >
                            Join Now
                            <svg
                                className="w-3 h-3 xl:w-4 xl:h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-3">
                        <button
                            onClick={() =>
                                window.open(
                                    "https://docs.google.com/forms/d/e/1FAIpQLSfT1B8HymRS1CCEveSLe_j5IanAtE4VuKoV8-BZW8PM8ntT8w/viewform",
                                    "_blank"
                                )
                            }
                            className="bg-white text-black px-3 py-1.5 rounded-full text-xs sm:text-sm"
                        >
                            Join
                        </button>
                        <button
                            onClick={toggleMenu}
                            className="text-white p-2"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg">
                        <nav className="flex flex-col py-4">
                            <a
                                href="#about"
                                className="px-6 py-3 text-gray-800 hover:bg-gray-100 transition-colors"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("about");
                                }}
                            >
                                About Us
                            </a>
                            <a
                                href="#features"
                                className="px-6 py-3 text-gray-800 hover:bg-gray-100 transition-colors"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("features");
                                }}
                            >
                                Features
                            </a>
                            <a
                                href="#services"
                                className="px-6 py-3 text-gray-800 hover:bg-gray-100 transition-colors"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("services");
                                }}
                            >
                                How It Works
                            </a>
                            <a
                                href="#stats"
                                className="px-6 py-3 text-gray-800 hover:bg-gray-100 transition-colors"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("stats");
                                }}
                            >
                                Success Stories
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
