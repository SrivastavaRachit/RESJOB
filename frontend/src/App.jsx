import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'

import Create from './components/Create/Create'
import See from './components/See/See'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/see' element={<See/>}/>
    </Routes>
    </>
  )
}

export default App