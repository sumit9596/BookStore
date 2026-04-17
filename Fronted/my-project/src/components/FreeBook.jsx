import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";

function FreeBook() {
    const [book, setBook] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            try {
                const res = await axios.get("http://localhost:4001/books");
                const freeBooks = res.data.filter((data) => data.category === "free");
                setBook(freeBooks);
                console.log(freeBooks);
            } catch (err) {
                console.log(err);
            }
        };
        getBooks();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <>
            <div className="my-10 md:my-20 px-4">
                <h1 className="font-semibold pb-3 text-xl md:text-3xl text-center">Free Books Collection</h1>
                <p className="text-sm md:text-lg text-center max-w-3xl mx-auto">
                    Start your reading journey with our carefully curated collection of free books.
                    Discover new authors, explore different genres, and expand your knowledge without spending a dime.
                </p>
            </div>

            <div className="m-20">
                <Slider {...settings}>
                    {book.map((data) => (
                        <Cards key={data.id} item={data} />
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default FreeBook;
