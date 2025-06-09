import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'

function App() {
  const [count, setCount] = useState(0)
  
  const router = createBrowserRouter(
    [
      {
        path:"/",
        element:
        <div>
          <NavBar/>
          <Home/>

        </div>
      },

      {
        path:"/paste",
        element:
        <div>
          <NavBar/>
          <Paste/>

        </div>
      },

      {
        path:"/paste/:id",
        element:
        <div>
          <NavBar/>
          <ViewPaste/>
        </div>
      },
    ]
  )

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
