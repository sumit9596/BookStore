import React, { useState } from 'react'

function Cards({ item }) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

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
                <div className="card bg-base-100 w-full max-w-sm mx-auto shadow-sm">
                    <figure className="relative">
                        {!imageLoaded && (
                            <div className="w-full h-48 bg-gradient-to-br from-base-200 to-base-300 animate-pulse flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-base-100/20 to-transparent animate-pulse"></div>
                                <div className="text-center text-base-content/50 z-10">
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
                            <div className="absolute inset-0 bg-gradient-to-br from-base-200 to-base-300 flex items-center justify-center">
                                <div className="text-center text-base-content/60">
                                    <div className="text-4xl mb-2">📖</div>
                                    <div className="text-xs font-medium">Book Cover</div>
                                    <div className="text-xs opacity-50 mt-1">Image unavailable</div>
                                </div>
                            </div>
                        )}
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-sm md:text-base line-clamp-2">
                            {item.name}
                            <div className="badge badge-secondary text-xs">{item.category}</div>
                        </h2>
                        <p className="text-xs md:text-sm text-base-content/70 line-clamp-2 mb-2">
                            {item.title}
                        </p>
                        {item.author && (
                            <p className="text-xs text-base-content/60 mb-1">
                                by {item.author}
                            </p>
                        )}
                        <div className="flex justify-between items-center mt-2">
                            {item.rating && (
                                <div className="flex items-center gap-1">
                                    <span className="text-yellow-500">★</span>
                                    <span className="text-xs">{item.rating}</span>
                                </div>
                            )}
                            {item.pages && (
                                <span className="text-xs text-base-content/60">{item.pages} pages</span>
                            )}
                        </div>
                        <div className="card-actions justify-end mt-4">
                            <div className="badge badge-outline text-xs">${item.price}</div>
                            <div className="badge badge-outline hover:bg-red-400 cursor-pointer text-xs">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards