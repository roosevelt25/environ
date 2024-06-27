import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './views/Home.jsx'
import AboutUs from './views/AboutUs.jsx'
import Contact from './views/Contact.jsx'
import QuizRecyclage from './components/QuizRecyclage.jsx'
import Discover from './components/Discover.jsx'
import Hero from './components/Hero.jsx'
import FabriqEco from './views/FabriqEco.jsx'


const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path:'home',
        element:<Home/>
      },
      {
        path: 'aboutUs',
        element: <AboutUs/>
      },
      {
        path:'contact',
        element: <Contact/>
      },
      {
        path: 'quiz',
        element: <QuizRecyclage/>
      },
      {
        path:'decoucrons-le-recyclage',
        element:<Discover/>
      },
      {
        path:'fabrique-éco',
        element:<FabriqEco/>
      },
      {
        path:'hero',
        element:<Hero/>
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
