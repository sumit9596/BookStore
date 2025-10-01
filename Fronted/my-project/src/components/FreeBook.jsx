import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from '../../public/list.json'
import Cards from './Cards';

function FreeBook() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    const filterData = list.filter((data) => data.category === "free");
    console.log(filterData);

    return (
        <>
            <div className='my-20 '>
                <h1 className='font-semibold m-5 pb-3'>Free Offered Cources </h1>
                <p className='ml-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sunt tempora deserunt libero facere nobis. Consectetur eius velit, esse mollitia quas laborum sequi odio id error provident porro sapiente autem?</p>
            </div>
            <div className='m-20'>
                <Slider {...settings}>
                    
                    {filterData.map((data)=><>
                        <Cards key={data.id} item={data}/>
                    </>
                    )}
                </Slider>
            </div>
        </>
    )
}

export default FreeBook