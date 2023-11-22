import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './views/landing/landing'
import Home from './views/home/home'
import Detail from './views/detail/detail'
import Form from './views/form/form'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
          <Route
            path='/'
            element={<Landing/>}
          />
          <Route
            path='/home'
            element={<Home/>}
          />
          <Route
            path='/detail'
            element={<Detail/>}
          />
          <Route
            path='/form'
            element={<Form/>}
          />
        </Routes>
      </div>
    </>
  )
}

export default App
