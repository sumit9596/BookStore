
import { Navigate, Routes } from 'react-router-dom'
import Courses from './components/Courses'
import Home from './home/Home'
import { Route } from 'react-router-dom'
import Course from './course/Course'
import SignUp from './components/SignUp'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log(JSON.stringify(authUser));
 
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        
        <Route path='/course' element={authUser ? <Course /> : <Navigate to='/signup' />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Toaster position="top-center" />
    </>

  )
}

export default App