import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
import { useAppcontext } from './context/AppContext'
import Login from './components/Login'
import AllProduct from './pages/AllProduct'

const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller");
  const {showUserLogin} = useAppcontext();
  return (
    <div className='text-center'>
      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Login/> :null}
      <Toaster />
      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<AllProduct/>} />
        </Routes>
      </div>
      {!isSellerPath && <Footer />}
    </div>
  )
}

export default App