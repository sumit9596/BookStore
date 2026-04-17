import list from "../../public/list.json"
import Cards from "./Cards"
import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"





function Courses() {
  const [book, setBook] = useState([])

  useEffect(() => {
    const getBooks = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4001';
        const res = await axios.get(`${apiUrl}/books`)
        console.log(res.data);
        setBook(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getBooks();
  }, [])
  return (
    <>
      <div className="mt-20 md:mt-25 items-center flex flex-col m-4 md:m-10 p-4 md:p-10">
        <h1 className='text-xl md:text-2xl font-bold text-center '>Welcome to Our <span className="text-pink-600">Book Collection</span></h1>
        <p className="mt-8 text-center text-sm md:text-lg max-w-4xl px-4">
          Explore our extensive library featuring thousands of books across all genres and categories.
          Whether you're looking for the latest bestsellers, classic literature, educational resources,
          or niche topics, we have something for every reader. Start your reading adventure today!
        </p>
        <Link to='/'>
          <button className="btn btn-secondary m-6 items-center text-center">Back to Home</button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-10 p-10">
        {book.map((item) =>
          <Cards key={item.id} item={item} />
        )}
      </div>
    </>
  )
}

export default Courses