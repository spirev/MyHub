import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout';
import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Loading from './components/Loading';
import Storage from './pages/Storage';
import PasswordGenerator from './pages/PasswordGenerator';
import Todo from './pages/Todo';
import Archives from './pages/Archives';
import Calendar from './pages/Calendar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "storage",
        element: <Storage />,
      },
      {
        path: "password-generator",
        element: <PasswordGenerator />,
      },
      {
        path: "todo",
        element: <Todo />,
      },
      {
        path: "archives",
        element: <Archives />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
      fallbackElement={<Loading />}
    />
  </React.StrictMode>,
)
