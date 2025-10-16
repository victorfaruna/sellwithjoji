"use client";

import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-[url('/images/hero-4.webp')] bg-cover bg-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/30"></div>

            {/* Content */}
            <div className="relative z-1 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:w-[500px] mx-auto text-center font-bold mb-4 sm:mb-6 leading-none">
                    <span className="block sm:inline">Sell with Joji </span>

                    <span className="block sm:inline mt-2 sm:mt-0">
                        Earn daily. Stay in control.
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl  mb-6 sm:mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed">
                    Join other students turning their love for snacks into daily
                    income.
                </p>

                {/* CTA Button */}
                <button
                    onClick={() =>
                        window.open(
                            "https://docs.google.com/forms/d/e/1FAIpQLSfT1B8HymRS1CCEveSLe_j5IanAtE4VuKoV8-BZW8PM8ntT8w/viewform",
                            "_blank"
                        )
                    }
                    className="bg-white/90 text-black px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-lg text-sm sm:text-base tracking-wide hover:bg-white hover:scale-105 transition-all duration-300 mb-8 sm:mb-12 flex items-center gap-2 mx-auto"
                >
                    Start Your Journey
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-4 h-4 sm:w-5 sm:h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                        />
                    </svg>
                </button>

                {/* Bottom Info */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-8 text-xs sm:text-sm text-white/80">
                    {/* Left side - Trust indicators */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                        <div className="flex items-center gap-2">
                            <span className="hidden sm:inline">
                                Trusted by FUOYE students
                            </span>
                            <span className="sm:hidden">
                                Trusted by students
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>Fresh pastries daily</span>
                        </div>
                        <div className="flex -space-x-1 sm:-space-x-2">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full border-2 border-white"></div>
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full border-2 border-white"></div>
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full border-2 border-white"></div>
                        </div>
                    </div>

                    {/* Right side - Social links */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        <span className="hidden sm:inline">Follow us:</span>
                        <div className="flex gap-2 sm:gap-3">
                            <a
                                href="#"
                                className="text-white/80 hover:text-white transition-colors text-xs sm:text-sm"
                            >
                                Instagram
                            </a>
                            <a
                                href="#"
                                className="text-white/80 hover:text-white transition-colors text-xs sm:text-sm"
                            >
                                Facebook
                            </a>
                            <a
                                href="#"
                                className="text-white/80 hover:text-white transition-colors text-xs sm:text-sm"
                            >
                                TikTok
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
