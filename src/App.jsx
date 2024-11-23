import React from 'react'
import {createHashRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Game from './pages/Game.jsx'
import './styles/App.css'

const router = createHashRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/game',
    element: <Game/>
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App