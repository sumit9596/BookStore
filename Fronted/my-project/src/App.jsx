
import { Routes } from 'react-router-dom'
import Courses from './components/Courses'
import Home from './home/Home'
import { Route } from 'react-router-dom'
import Course from './course/Course'
import SignUp from './components/SignUp'

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/course' element={<Course/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
  </>
    
  )
}

export default App