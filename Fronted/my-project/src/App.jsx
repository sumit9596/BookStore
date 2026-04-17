
import { Navigate, Routes } from 'react-router-dom'
import Courses from './components/Courses'
import Home from './home/Home'
import { Route } from 'react-router-dom'
import Course from './course/Course'
import SignUp from './components/SignUp'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'
import Contact from './components/Contact'
import About from './components/About'

function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log(JSON.stringify(authUser));



  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        {/* <Route path="/course" element={<Course/> }/> */}
        <Route path='/course' element={authUser ? <Course /> : <Navigate to='/signup' />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Toaster position="top-center" />
    </div>

  )
}

export default App