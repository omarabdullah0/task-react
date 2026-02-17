import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {  createHashRouter, RouterProvider } from 'react-router-dom'
import Blogs from './pages/Blogs'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Notfound from './pages/Notfound'
import BlogDetails from './pages/BlogDetails'
import AboutUs from './pages/AboutUs'

function App() {
  const [count, setCount] = useState(0)


  const routes = createHashRouter([
    {path:'/', element:<Layout></Layout>, children:[
      {index:true, element:<Home></Home>},
      {path:'/blogs', element:<Blogs></Blogs>},
      {path:'/blogs/:slug', element:<BlogDetails></BlogDetails>},
      {path:'/aboutus', element:<AboutUs></AboutUs>},
      {path:'*', element:<Notfound></Notfound>}
    ]}
  ])


  return (
    <div className='layout'>
    <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}

export default App
