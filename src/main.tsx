import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import VerticalNavbar from './components/VerticalNavbar';
import HorizontalNavbar from './components/HorizontalNavbar';
import './main.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  }
]);

function Root() {
  return (
    <>
      <HorizontalNavbar />
      <VerticalNavbar />
      <Outlet />
    </>
    );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
