import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'

const router = createBrowserRouter([
  
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/services',
    element:<Services/>
  },
  {
    path:'/about',
    element:<About/>
  }
  ,
  {
    path:'/products',
    element:<Products/>
  },
  {
    path:':string',
    element:<ProductDetail/>
  }

])

createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)
