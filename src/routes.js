import {useRoutes} from 'react-router-dom'
import {lazy} from 'react'

const HomePage = lazy(() => import('./pages/Home'))
const NotFoundPage = lazy(() => import('./pages/NotFound'))

export default function Router() {
  let element = useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ])
  return element
}
