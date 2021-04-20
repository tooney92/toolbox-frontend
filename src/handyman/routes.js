import { useRoutes } from './constants.js'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

export const useRoutesAndComponents = () => {
  const { HAND_HOME, HAND_LOGIN } = useRoutes()

  const routes = [
    { path: HAND_HOME, component: Dashboard, exact: true },
    { path: HAND_LOGIN, component: Login, exact: true }
  ]
  return routes
}
