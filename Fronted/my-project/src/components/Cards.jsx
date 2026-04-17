import React, { useState } from 'react'

function Cards({ item }) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [showBuyOptions, setShowBuyOptions] = useState(false);

    const defaultImage = "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=center";

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const handleImageError = () => {
        setImageError(true);
        setImageLoaded(true);
    };

    const imageSrc = imageError ? defaultImage : (item.image || defaultImage);

    return (
        <div>
            <div className='m-2 md:m-5 hover:scale-105 duration-300 rounded-lg'>
                <div className="bg-white dark:bg-gray-800 w-full max-w-sm mx-auto shadow-md dark:shadow-gray-700 rounded-lg overflow-hidden hover:shadow-lg dark:hover:shadow-gray-600 transition-shadow">
                    <div className="relative">
                        {!imageLoaded && (
                            <div className="w-full h-48 bg-gradient-to-br from-gray-200 dark:from-gray-700 to-gray-300 dark:to-gray-600 animate-pulse flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-gray-400/10 to-transparent animate-pulse"></div>
                                <div className="text-center text-gray-500 dark:text-gray-400 z-10">
                                    <div className="text-3xl mb-2">📚</div>
                                    <div className="text-xs">Loading book...</div>
                                </div>
                            </div>
                        )}
                        <img
                            src={imageSrc}
                            alt={item.name}
                            className={`w-full h-48 object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                                }`}
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                            style={{ display: imageLoaded ? 'block' : 'none' }}
                        />
                        {imageError && (
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 dark:from-gray-700 to-gray-300 dark:to-gray-600 flex items-center justify-center">
                                <div className="text-center text-gray-600 dark:text-gray-400">
                                    <div className="text-4xl mb-2">📖</div>
                                    <div className="text-xs font-medium">Book Cover</div>
                                    <div className="text-xs opacity-50 mt-1">Image unavailable</div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="p-4">
                        <div className="flex items-start justify-between gap-2 mb-2">
                            <h2 className="text-sm md:text-base font-semibold text-gray-800 dark:text-gray-200 line-clamp-2 flex-1">
                                {item.name}
                            </h2>
                            <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                                {item.category}
                            </span>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-2">
                            {item.title}
                        </p>
                        {item.author && (
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                                by {item.author}
                            </p>
                        )}
                        <div className="flex justify-between items-center mt-2 mb-3">
                            {item.rating && (
                                <div className="flex items-center gap-1">
                                    <span className="text-yellow-500">★</span>
                                    <span className="text-xs text-gray-700 dark:text-gray-300">{item.rating}</span>
                                </div>
                            )}
                            {item.pages && (
                                <span className="text-xs text-gray-500 dark:text-gray-400">{item.pages} pages</span>
                            )}
                        </div>
                        <div className="flex justify-between items-center gap-2 relative">
                            <div className="border border-gray-300 rounded px-3 py-1 text-xs font-semibold text-gray-700 dark:border-gray-600 dark:text-gray-300">
                                ${item.price}
                            </div>
                            <div className="relative">
                                <button 
                                    onClick={() => setShowBuyOptions(!showBuyOptions)}
                                    className="border border-gray-300 rounded px-3 py-1 text-xs font-semibold text-gray-700 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition cursor-pointer dark:border-gray-600 dark:text-gray-300 dark:hover:bg-pink-600"
                                >
                                    Buy Now ▼
                                </button>
                                {showBuyOptions && (
                                    <div className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded shadow-lg z-10 min-w-48">
                                        <a 
                                            href={item.flipkart_url || "#"} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 transition border-b dark:border-gray-700 flex items-center gap-2"
                                        >
                                            <span>🛒</span> Flipkart
                                        </a>
                                        <a 
                                            href={item.amazon_url || "#"} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-800 transition flex items-center gap-2"
                                        >
                                            <span>📦</span> Amazon
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards