import ReactDOM from 'react-dom/client'
import {ChakraProvider} from "@chakra-ui/react"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Root from './components/Root.tsx'
import NotFound from './error components/NotFound.tsx'
import Home from './Pages/Home.tsx'
import Auth from './components/Auth.tsx'
import BlogPosts from './Pages/BlogPosts.tsx'
import Blog from './Pages/Blog.tsx'
import { BlogContextProvider } from './context/BlogContext.tsx'

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        {
          path: "home",
          element: <Home />
        },
        {
          path: "login",
          element: <Auth />
        },
        {
          path: "blog/:id",
          element: <Blog />
        },
        {
          path: "blogs/",
          children: [
            {
              path: "all",
              element: <BlogPosts />
            }
          ]
        }
      ]
    },
  ])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider>
    <BlogContextProvider>
      <RouterProvider router={router} />
    </BlogContextProvider>
  </ChakraProvider>,
)
