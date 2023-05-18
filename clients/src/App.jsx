import React from 'react'
import './app.css'
import Edit from './components/Edit'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from './components/Form'

const App = () => {
  return (
    <div className='app_main'>
      <BrowserRouter>

      <Routes>
        <Route path='/' element={<Form/>}  />
        <Route path='/edit/:id' element={<Edit/>}  />
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App