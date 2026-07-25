import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout    from "./Layout"
import Home      from "./pages/Home"
import About     from "./pages/About"
import Dashboard from "./pages/Dashboard"

const router = createBrowserRouter([{
  path: "/",
  element: <Layout/>,
  children: [
    { index: true,        element: <Home/>      },
    { path: "about",      element: <About/>     },
    { path: "dashboard",  element: <Dashboard/> },
    { path: "*",          element: <h2>404</h2>    },
  ]
}])

export default function App() {
  return <RouterProvider router={router} />
}