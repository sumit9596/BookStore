import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Courses from '../components/Courses'
import { useAuth } from '../context/AuthProvider'

function Course() {

  const [authUser, setAuthUser] = useAuth()
  console.log(authUser);
  return (
    <>
        <Navbar/>
        <div className='min-h-screen'>
          <Courses/>
        </div>
        <Footer/>
    </>
  )
}

export default Course