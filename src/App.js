import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/home.component'
import Profile from './routes/profile/profile.component'

const App = () => {
  return (
    <Routes>
      <Route index element={ <Home/> } />
      <Route path='profile' element={ <Profile/> } />
    </Routes>
  )
}

export default App
