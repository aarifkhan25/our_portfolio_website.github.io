import { useState } from 'react'
import{createBrowserRouter,RouterProvider,createRoutesFromElements,Route} from 'react-router-dom';
import './App.css'
import AppLayout from './Components/AppLayout';
import Home from './Components/Home'
import Contact from './Components/Contact'
import Career from './Components/Career'
import Skills from './Components/Skills'
import Projects from './Components/Projects'


function App() {
const router=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout></AppLayout>,
    
    children:[
        {
          path: '/',element:<Home></Home>
        },
        ,
        {
          path: '/Career',element:<Career></Career>
        },
        {
          path: '/skills',element:<Skills></Skills>
        },
        {
          path: '/projects',element:<Projects></Projects>
        },
        {
          path: '/contact',element:<Contact></Contact>
        }

      ]
    
  }
])


  return(
    <RouterProvider router={router}></RouterProvider>


  )
  
  }

export default App
