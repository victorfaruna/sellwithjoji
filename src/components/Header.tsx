"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu when clicking outside or pressing escape
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isMenuOpen]);

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
                            className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/20"
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-6 flex flex-col justify-center items-center">
                                <span
                                    className={`block w-5 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                                        isMenuOpen
                                            ? "rotate-45 translate-y-1"
                                            : "-translate-y-1"
                                    }`}
                                />
                                <span
                                    className={`block w-5 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                                        isMenuOpen ? "opacity-0" : "opacity-100"
                                    }`}
                                />
                                <span
                                    className={`block w-5 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                                        isMenuOpen
                                            ? "-rotate-45 -translate-y-1"
                                            : "translate-y-1"
                                    }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div
                    className={`lg:hidden fixed inset-0 z-50 ${
                        isMenuOpen ? "block" : "hidden"
                    }`}
                >
                    {/* Backdrop */}
                    <div
                        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
                            isMenuOpen ? "opacity-100" : "opacity-0"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                    />

                    {/* Slide Menu */}
                    <div
                        className={`absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
                            isMenuOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                    >
                        {/* Menu Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/images/logo.webp"
                                    alt="SellWithJoji"
                                    className="w-8 h-8"
                                    width={32}
                                    height={32}
                                />
                                <p className="text-sm font-medium text-gray-800">
                                    Joji Foods
                                </p>
                            </div>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                aria-label="Close menu"
                            >
                                <svg
                                    className="w-5 h-5 text-gray-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Menu Items */}
                        <nav className="py-4">
                            <a
                                href="#about"
                                className="block px-6 py-4 text-gray-800 hover:bg-gray-50 transition-colors border-l-4 border-transparent hover:border-blue-500"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("about");
                                }}
                            >
                                About Us
                            </a>
                            <a
                                href="#features"
                                className="block px-6 py-4 text-gray-800 hover:bg-gray-50 transition-colors border-l-4 border-transparent hover:border-blue-500"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("features");
                                }}
                            >
                                Features
                            </a>
                            <a
                                href="#services"
                                className="block px-6 py-4 text-gray-800 hover:bg-gray-50 transition-colors border-l-4 border-transparent hover:border-blue-500"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("services");
                                }}
                            >
                                How It Works
                            </a>
                            <a
                                href="#stats"
                                className="block px-6 py-4 text-gray-800 hover:bg-gray-50 transition-colors border-l-4 border-transparent hover:border-blue-500"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("stats");
                                }}
                            >
                                Success Stories
                            </a>
                        </nav>

                        {/* Menu Footer */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
                            <button
                                onClick={() => {
                                    window.open(
                                        "https://docs.google.com/forms/d/e/1FAIpQLSfT1B8HymRS1CCEveSLe_j5IanAtE4VuKoV8-BZW8PM8ntT8w/viewform",
                                        "_blank"
                                    );
                                    setIsMenuOpen(false);
                                }}
                                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                            >
                                Join Now
                                <svg
                                    className="w-4 h-4"
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
                    </div>
                </div>
            </div>
        </header>
    );
}
