import list from "../../public/list.json"
import Cards from "./Cards"
import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"





function Courses() {
  const [book,setBook]=useState([])

  useEffect(()=>{
    const getBooks=async()=>{
      try{
        const res=await axios.get("http://localhost:4001/books")
        console.log(res.data);      
        setBook(res.data)
      }catch(err){
        console.log(err)
      }
    }
    getBooks();
  },[])
  return (
    <>
    <div className="mt-25 items-center flex flex-col m-10 p-10">
      <h1 className='text-2xl font-bold text-center '>We're delighted to have you <span className="text-pink-600">Here! :)</span></h1>
      <p className="mt-8 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt porro harum fugiat libero sit voluptatum ratione tempore officia eligendi quisquam. Odio error nulla dolorum vitae ipsa quia cum eveniet nihil perferendis blanditiis, rem debitis! Delectus, similique illo quia sit nihil amet possimus excepturi tenetur dolorum qui atque mollitia dicta soluta quidem ad commodi, sunt aperiam? Magni, commodi facilis placeat eos cumque nisi ab assumenda quas et adipisci corporis. Minima aliquid sint enim dolores dolore, earum qui molestiae quod laboriosam iure.</p>
      <Link to ='/'>
            <button className="btn btn-secondary m-6 items-center text-center">Back</button>

      </Link>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-10 p-10">
    {book.map((item)=> 
      <Cards key={item.id} item={item}/>
    )}
    </div>
    </>
  )
}

export default Courses