import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import Loading from './components/loading/Loading';
import Storage from './pages/storage/Storage';
import PasswordGenerator from './pages/passwordGenerator/PasswordGenerator';
import Todo from './pages/todo/Todo';
import Archives from './pages/archives/Archives';
import Calendar from './pages/calendar/Calendar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
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
  {
    path: "login",
    element: <Login />,
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
