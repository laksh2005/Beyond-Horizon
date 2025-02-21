import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Landing from "./Landing"
import About from './About'
import Contact from './Contact'
import Form from './Form'

const Body = () => {

    const appRouter= createBrowserRouter([
        {
            path:"/",
            element: <Landing />,
        },
        {
            path:"/form",
            element: <Form />
        },
        {
            path:"/contact",
            element: <Contact />
        },
        {
            path:"/about",
            element: <About />
        },
    ])
    
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body