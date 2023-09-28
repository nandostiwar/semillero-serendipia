import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Pedido from './pages/Pedido.jsx';
import Mesero from './pages/Mesero.jsx';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Login from './pages/Login';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/Login",
    element: <Login/>
  },
  {
    path: "/Mesero/:MsroId",
    element: <Mesero/>
  },
  {
    path: "/Pedido",
    element: <Pedido/>
  }
])

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes}/>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  </React.StrictMode>,
)
