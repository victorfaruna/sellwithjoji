"use client";

export default function Features() {
    return (
        <section
            id="features"
            className="py-20 bg-gradient-to-br from-gray-50 to-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Why students love Sell with Joji
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Join hundreds of FUOYE students who are already earning
                        daily while staying focused on their studies
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {/* Main Feature Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] rounded-2xl p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold">
                                        Daily Income
                                    </h3>
                                </div>
                                <p className="text-lg text-white/90 mb-6">
                                    You earn daily from snacks your friends
                                    already buy. No complex business models,
                                    just simple selling.
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white"></div>
                                        <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white"></div>
                                        <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white"></div>
                                    </div>
                                    <span className="text-sm text-white/80">
                                        500+ students earning daily
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature Grid */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-6 h-6 text-[var(--color-accent)]"
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
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                        Your Schedule
                                    </h4>
                                    <p className="text-gray-600">
                                        You decide when and how to sell. Perfect
                                        for busy student life.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-6 h-6 text-[var(--color-accent)]"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                        Study Balance
                                    </h4>
                                    <p className="text-gray-600">
                                        Stay consistent without affecting your
                                        studies. Education first, always.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-6 h-6 text-[var(--color-accent)]"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                        Trusted Community
                                    </h4>
                                    <p className="text-gray-600">
                                        Part of a trusted community of students
                                        building together.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Success Stories Preview */}
                <div className="bg-gradient-to-r from-[var(--color-accent)]/5 to-[var(--color-accent-dark)]/5 rounded-2xl p-8">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            Real Student Success
                        </h3>
                        <p className="text-gray-600">
                            Hear from students who are already earning with us
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-[var(--color-accent)] rounded-full flex items-center justify-center text-white font-bold">
                                    A
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        Aisha
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Computer Science
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">
                                "I earn ₦15,000 weekly just selling to my
                                classmates. It's so easy!"
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-[var(--color-accent)] rounded-full flex items-center justify-center text-white font-bold">
                                    K
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        Kemi
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Business Admin
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">
                                "Perfect for my schedule. I sell during breaks
                                and earn daily."
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-[var(--color-accent)] rounded-full flex items-center justify-center text-white font-bold">
                                    T
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        Tunde
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Engineering
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">
                                "My friends love the fresh pastries. Great
                                business opportunity!"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
