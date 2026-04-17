import React from 'react'

function Banner() {

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 m-4 md:m-12 mt-20 md:mt-24 relative overflow-hidden'>
                {/* Background decorative elements - more subtle */}
                <div className='absolute top-20 left-20 w-24 h-24 bg-pink-500/5 rounded-full blur-2xl animate-pulse'></div>
                <div className='absolute bottom-32 right-32 w-36 h-36 bg-purple-500/5 rounded-full blur-3xl animate-pulse' style={{ animationDelay: '1s' }}></div>
                <div className='absolute top-1/3 right-1/4 w-20 h-20 bg-blue-500/5 rounded-full blur-xl animate-pulse' style={{ animationDelay: '2s' }}></div>

                {/* Floating particles */}
                <div className='absolute top-16 right-16 w-2 h-2 bg-pink-400/40 rounded-full animate-bounce' style={{ animationDelay: '0.5s' }}></div>
                <div className='absolute bottom-20 left-16 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-bounce' style={{ animationDelay: '1.5s' }}></div>
                <div className='absolute top-1/2 left-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-bounce' style={{ animationDelay: '2.5s' }}></div>
                <div className='order-2 md:order-1 relative z-10'>
                    <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-white/10'>
                        <h1 className='text-2xl md:text-4xl font-bold mt-4 md:mt-8 mx-2 md:mx-6 items-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent'>
                            Discover Your Next <span className='text-pink-500'>Great Read</span>
                        </h1>
                        <p className='mx-2 md:mx-6 my-5 text-base md:text-lg text-base-content/80 leading-relaxed'>
                            Explore our vast collection of books across all genres. From bestselling novels to educational resources,
                            find the perfect book that sparks your imagination and expands your knowledge.
                        </p>
                        <div className='mx-2 md:mx-6 my-5 flex flex-col sm:flex-row gap-3'>
                            <label className="input validator w-full sm:w-auto bg-white/10 border-white/20 focus-within:border-pink-500 transition-colors">
                                <svg className="h-[1em] opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                </svg>
                                <input type="email" placeholder="Enter your email for updates" required className="w-full bg-transparent" />
                            </label>
                            <div className="validator-hint hidden">Enter valid email address</div>
                        </div>
                        <div className='mx-2 md:mx-6 my-5 flex flex-col sm:flex-row gap-4'>
                            <button className="btn btn-secondary w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-pink-500 to-pink-600 border-none">
                                Browse Books
                            </button>
                            <button className="btn btn-outline w-full sm:w-auto border-white/30 hover:border-pink-500 hover:bg-pink-500/10 transition-all duration-300">
                                Join Community
                            </button>
                        </div>
                    </div>
                </div>
                <div className='order-1 md:order-2 flex justify-center items-center relative'>
                    <div className='relative group'>
                        {/* Elegant shadow and background */}
                        <div className='absolute -inset-8 bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-blue-500/10 rounded-[3rem] blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-700'></div>

                        {/* Main image with premium styling */}
                        <div className='relative transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-700 ease-out'>
                            {/* Image container with depth */}
                            <div className='relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-3xl p-1 shadow-2xl border border-white/20'>
                                <img
                                    src="/Banner.jpg"
                                    alt="banner"
                                    className="w-full max-w-sm md:max-w-md h-auto rounded-2xl shadow-xl object-cover"
                                />

                                {/* Subtle inner glow */}
                                <div className='absolute inset-0 bg-gradient-to-t from-pink-500/10 via-transparent to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                            </div>

                            {/* Floating book elements for decoration */}
                            <div className='absolute -top-4 -right-4 w-8 h-12 bg-gradient-to-b from-pink-400 to-pink-600 rounded-lg shadow-lg transform rotate-12 opacity-80 group-hover:rotate-6 transition-transform duration-500'>
                                <div className='w-full h-1 bg-white/30 rounded-t-lg'></div>
                            </div>
                            <div className='absolute -bottom-3 -left-3 w-6 h-10 bg-gradient-to-b from-purple-400 to-purple-600 rounded-lg shadow-lg transform -rotate-12 opacity-70 group-hover:-rotate-6 transition-transform duration-500'>
                                <div className='w-full h-1 bg-white/30 rounded-t-lg'></div>
                            </div>

                            {/* Reading light effect */}
                            <div className='absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gradient-to-r from-transparent via-yellow-300/60 to-transparent rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Banner