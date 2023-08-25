import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Crear from './Components/Crear.jsx';
import Editar from './Components/Editar.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/Crear",
    element: <Crear/>
  },
  {
    path: "/Editar/:id",
    element: <Editar/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
