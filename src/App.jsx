
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/home'
import Navbar from './components/navbar'
import Login from './pages/Login'
import MyAppoinment from './pages/MyAppoinment'
import MyProfile from './pages/MyProfile'
import Logout from './pages/Logout'
import Appoinment from './pages/Appoinment'
import Doctor from './pages/Doctor'
import Footer from './components/Footer'

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
      <Route path='/appoinment/:docId' element={<Appoinment/>}/>
      <Route path='/doctors' element={<Doctor/>}/>
      <Route path='/doctors/:speciality' element={<Doctor/>}/>
    </Routes>
<Footer/>
   </div>
  )
}

export default App
