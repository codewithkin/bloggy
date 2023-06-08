import ReactDOM from 'react-dom/client'
import {ChakraProvider} from "@chakra-ui/react"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Root from './components/Root.tsx'
import NotFound from './error components/NotFound.tsx'

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <NotFound />
    }
  ])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>,
)
