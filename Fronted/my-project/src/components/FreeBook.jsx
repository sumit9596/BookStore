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
    };

    return (
        <>
            <div className="my-20">
                <h1 className="font-semibold m-5 pb-3">Free Offered Courses</h1>
                <p className="ml-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sunt
                    tempora deserunt libero facere nobis.
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
