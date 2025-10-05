import React, { useEffect,useState } from 'react'
import banner from '../../public/banner.jpg'

function Banner() {
    
    return (
        <>
            <div className='grid grid-cols-2 m-12 mt-24 '>
                <div>
                    <h1 className='text-4xl font-bold mt-20 mx-10 items-center'>
                        Hello, Welcome here to learn something <span className='text-pink-500'>new Everyday !!!</span>
                    </h1>
                    <p className='mx-10 my-5 text-lg'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis labore totam illum asperiores quis tenetur veniam alias esse blanditiis quo. consectetur adipisicing elit. Quisquam, quod.</p>
                    <div className='mx-10 my-5 flex'>
                        <label className="input validator">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
                            <input type="email" placeholder="mail@site.com" required />
                        </label>
                        <div className="validator-hint hidden">Enter valid email address</div>
                    </div>
                    <div className='mx-10 my-5 flex gap-4'>
                    <button className="btn btn-secondary">Get Started</button>

                    </div>
                </div>
                <div className='hidden md:block'>
                    <img src={banner} alt="banner"  />
                </div>
            </div>

        </>
    )
}

export default Banner