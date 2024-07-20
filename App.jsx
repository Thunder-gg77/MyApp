import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import AddStudent from './components/Addstudent'
import ViewStudent from './components/ViewStudent'


function App() {
  

  return (
    <>
     <Navbar/>
     <Routes>
      
      <Route path ='/' element={<AddStudent/>} />
      <Route path ='/a' element={<ViewStudent/>} />
      <Route path='/add' element={<ViewStudent/>}/> 
      </Routes>
      </>
  )
}

export default App
