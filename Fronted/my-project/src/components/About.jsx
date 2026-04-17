import React from 'react'
import Navbar from './Navbar'

function About() {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16">
                <div className="container mx-auto px-4">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">About BookStore</h1>
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto px-4">
                            Your gateway to a world of knowledge, imagination, and endless possibilities.
                            We're passionate about connecting readers with the books that will change their lives.
                        </p>
                    </div>

                    {/* Mission Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg dark:shadow-gray-700">
                            <h2 className="text-xl md:text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Our Mission</h2>
                            <p className="text-gray-700 dark:text-gray-400 mb-4">
                                At BookStore, we believe that every person deserves access to quality literature
                                that inspires, educates, and entertains. Our mission is to create a vibrant
                                community of readers who discover new worlds through the power of books.
                            </p>
                            <p className="text-base-content/80">
                                We curate our collection with care, ensuring that every book we offer has the
                                potential to make a positive impact on our readers' lives, whether through
                                entertainment, education, or personal growth.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg dark:shadow-gray-700">
                            <h2 className="text-xl md:text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Our Vision</h2>
                            <p className="text-gray-700 dark:text-gray-400 mb-4">
                                We envision a world where reading is not just a pastime, but a way of life.
                                Where every individual has the opportunity to explore diverse perspectives,
                                challenge their assumptions, and grow through the wisdom of great authors.
                            </p>
                            <p className="text-base-content/80">
                                Through our platform, we aim to foster a global community of lifelong learners
                                who find joy, inspiration, and knowledge in the pages of books.
                            </p>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="bg-base-100 p-8 rounded-lg shadow-lg mb-16">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                                <div className="text-base-content/70">Books Available</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
                                <div className="text-base-content/70">Happy Readers</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                                <div className="text-base-content/70">Authors Featured</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                                <div className="text-base-content/70">Genres Covered</div>
                            </div>
                        </div>
                    </div>

                    {/* Values Section */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-center text-base-content mb-12">Our Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-base-100 p-6 rounded-lg shadow-lg text-center">
                                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-primary-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-base-content mb-3">Quality Selection</h3>
                                <p className="text-base-content/70">
                                    We carefully curate our collection to ensure every book meets our high standards
                                    for content quality and reader satisfaction.
                                </p>
                            </div>

                            <div className="bg-base-100 p-6 rounded-lg shadow-lg text-center">
                                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-primary-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-base-content mb-3">Community Focus</h3>
                                <p className="text-base-content/70">
                                    We build and nurture a community of passionate readers who share recommendations,
                                    discuss books, and grow together.
                                </p>
                            </div>

                            <div className="bg-base-100 p-6 rounded-lg shadow-lg text-center">
                                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-primary-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-base-content mb-3">Innovation</h3>
                                <p className="text-base-content/70">
                                    We continuously innovate to make book discovery easier, more enjoyable,
                                    and accessible to readers everywhere.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Team Section */}
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-base-content mb-8">Meet Our Team</h2>
                        <p className="text-lg text-base-content/70 mb-12 max-w-2xl mx-auto">
                            Our passionate team of book lovers works tirelessly to bring you the best reading experience possible.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-base-100 p-6 rounded-lg shadow-lg">
                                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-primary-content">A</span>
                                </div>
                                <h3 className="text-xl font-semibold text-base-content mb-2">Alex Johnson</h3>
                                <p className="text-primary font-medium mb-3">Founder & CEO</p>
                                <p className="text-base-content/70 text-sm">
                                    A lifelong reader with a passion for connecting people with great books.
                                </p>
                            </div>

                            <div className="bg-base-100 p-6 rounded-lg shadow-lg">
                                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-primary-content">S</span>
                                </div>
                                <h3 className="text-xl font-semibold text-base-content mb-2">Sarah Chen</h3>
                                <p className="text-primary font-medium mb-3">Head Curator</p>
                                <p className="text-base-content/70 text-sm">
                                    Expert in literature with a keen eye for discovering hidden literary gems.
                                </p>
                            </div>

                            <div className="bg-base-100 p-6 rounded-lg shadow-lg">
                                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-primary-content">M</span>
                                </div>
                                <h3 className="text-xl font-semibold text-base-content mb-2">Mike Rodriguez</h3>
                                <p className="text-primary font-medium mb-3">Tech Lead</p>
                                <p className="text-base-content/70 text-sm">
                                    Technology enthusiast ensuring smooth digital reading experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About