
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/home'
import Navbar from './components/navbar'
import Login from './pages/Login'
import MyAppoinment from './pages/MyAppoinment'
import MyProfile from './pages/MyProfile'
import Logout from './pages/Logout'

function App() {

  return (
   <div className="mx-4 sm:mx-[10%]">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/my-appoinment' element={<MyAppoinment/>}/>
      <Route path='/my-profile' element={<MyProfile/>}/>
      <Route path='/logout' element={<Logout/>}/>
    </Routes>

   </div>
  )
}

export default App
