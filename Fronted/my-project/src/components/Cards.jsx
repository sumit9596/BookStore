import React from 'react'
import list from '../../public/list.json'

function Cards({item}) {
    return (
        <div>
            <div className='m-5 hover:scale-105 duration-300 rounded-lg '>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name }
                            <div className="badge badge-secondary ">{item.category}</div>
                        </h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">${item.price}</div>
                            <div className="badge badge-outline hover:bg-red-400 cursor-pointer">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards