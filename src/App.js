import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './components/Add'
import Searchh from './components/Searchh'
import Deletee from './components/Deletee'
import Vieww from './components/Vieww'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/ADD" element={<Add />} />
        <Route path="/Search" element={<Searchh />} />
        <Route path="/Delete" element={<Deletee />} />
        <Route path="/View" element={<Vieww />} />

        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App