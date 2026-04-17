import React from 'react'
import Navbar from '../components/Navbar'
import Courses from '../components/Courses'
import { useAuth } from '../context/AuthProvider'

function Course() {

  const [authUser, setAuthUser] = useAuth()
  console.log(authUser);
  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
        <Courses />
      </div>
    </>
  )
}

export default Course