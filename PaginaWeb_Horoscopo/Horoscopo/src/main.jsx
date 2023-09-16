import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Admin from './pages/Admin';
import Registro from './pages/Registro';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/Admin",
    element: <Admin/>
  },
  {
    path: "/User",
    element: <Registro/>
  }
]);

// const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)