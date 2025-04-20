import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Post } from './pages/Post'
import { Dashboard } from './pages/Dashboard'
import { ProtectedRout } from './pages/ProtectedRout'
import { Login } from './pages/Login'
import { Details } from './pages/Details'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route element={<ProtectedRout><Post></Post></ProtectedRout>} path='/'></Route>
      <Route element={<ProtectedRout><Dashboard></Dashboard></ProtectedRout>} path='/profile'></Route>
      <Route element={<Login></Login>} path='/login'></Route>
      <Route element={<ProtectedRout><Details></Details> </ProtectedRout>} path='/details/:id'></Route>
     </Routes>
    </>
  )
}

export default App
