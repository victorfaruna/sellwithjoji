"use client";

export default function Services() {
    return (
        <section
            id="services"
            className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full -translate-y-48 translate-x-48"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--color-accent)]/3 rounded-full translate-y-40 -translate-x-40"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                                clipRule="evenodd"
                            />
                        </svg>
                        How It Works
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Simple steps to get started
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Join hundreds of FUOYE students who are already earning
                        daily. It's easier than you think!
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {/* Step 1 */}
                    <div className="group">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--color-accent)]/10 rounded-bl-3xl"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl font-bold text-white">
                                        1
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Join the Program
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Sign up and get started with your reseller
                                    journey. It takes less than 2 minutes.
                                </p>
                                <div className="flex items-center text-[var(--color-accent)] font-semibold">
                                    <span>Get Started</span>
                                    <svg
                                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="group">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--color-accent)]/10 rounded-bl-3xl"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl font-bold text-white">
                                        2
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Pick Up Snacks
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Get your fresh pastries from the Joji
                                    in-campus store at discounted rates.
                                </p>
                                <div className="flex items-center text-[var(--color-accent)] font-semibold">
                                    <span>Visit Store</span>
                                    <svg
                                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="group">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--color-accent)]/10 rounded-bl-3xl"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl font-bold text-white">
                                        3
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Sell to Friends
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Sell to your friends and classmates on
                                    campus. They already love these snacks!
                                </p>
                                <div className="flex items-center text-[var(--color-accent)] font-semibold">
                                    <span>Start Selling</span>
                                    <svg
                                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="group">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--color-accent)]/10 rounded-bl-3xl"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl font-bold text-white">
                                        4
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Earn Daily
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Earn your profit — every single day. Build
                                    your income while studying.
                                </p>
                                <div className="flex items-center text-[var(--color-accent)] font-semibold">
                                    <span>Keep Earning</span>
                                    <svg
                                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Promise Section */}
                <div className="bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-navy-light)] rounded-3xl p-12 text-white relative overflow-hidden mb-16">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                            <svg
                                className="w-8 h-8"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold mb-6">The Promise</h3>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            We believe in real opportunities for students. No
                            stress. No long process. Just a clear way to make
                            income while staying focused on your education.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                <div className="w-12 h-12 bg-[var(--color-accent)] rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <h4 className="font-semibold mb-2">No Risk</h4>
                                <p className="text-sm text-white/80">
                                    Start small, scale as you grow
                                </p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                <div className="w-12 h-12 bg-[var(--color-accent)] rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <h4 className="font-semibold mb-2">Flexible</h4>
                                <p className="text-sm text-white/80">
                                    Work around your schedule
                                </p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                <div className="w-12 h-12 bg-[var(--color-accent)] rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold mb-2">Proven</h4>
                                <p className="text-sm text-white/80">
                                    500+ students already earning
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 max-w-4xl mx-auto">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Ready to start?
                        </h3>
                        <p className="text-xl text-gray-600 mb-8">
                            Join Sell with Joji today and take charge of your
                            campus life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() =>
                                    window.open(
                                        "https://docs.google.com/forms/d/e/1FAIpQLSfT1B8HymRS1CCEveSLe_j5IanAtE4VuKoV8-BZW8PM8ntT8w/viewform",
                                        "_blank"
                                    )
                                }
                                className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                            >
                                Join Sell with Joji Today
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </button>
                            <button className="border-2 border-[var(--color-accent)] text-[var(--color-accent)] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                        <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <svg
                                    className="w-4 h-4 text-green-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Free to join
                            </div>
                            <div className="flex items-center gap-2">
                                <svg
                                    className="w-4 h-4 text-green-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                No experience needed
                            </div>
                            <div className="flex items-center gap-2">
                                <svg
                                    className="w-4 h-4 text-green-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Start earning today
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
