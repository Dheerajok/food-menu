import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />, 
      children: [
        { index: true, element: <Home /> }, 
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
      ],
    },
  ]);

  return (
    <>

     <RouterProvider router={router}/>


    </>
  )
}

export default App
