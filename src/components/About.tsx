export default function About() {
    return (
        <section id="about" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <p className="text-sm text-[var(--color-gray-medium)] mb-4 rounded-full px-5 py-3 bg-black/5 inline-block">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 inline"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
                            />
                        </svg>
                        {"  "}
                        <span>What is Sell with Joji?</span>
                    </p>
                    <p className="text-[14px] lg:text-lg text-gray-700 leading-relaxed mb-6">
                        Sell with Joji is a student-powered initiative by Joji
                        Foods.
                    </p>
                    <p className="text-[14px] lg:text-lg text-gray-700 leading-relaxed">
                        We help students at FUOYE earn daily by selling fresh
                        pastries like meatpies, chinchin, and egg rolls, all at
                        discounted rates.
                    </p>
                </div>
            </div>
        </section>
    );
}
