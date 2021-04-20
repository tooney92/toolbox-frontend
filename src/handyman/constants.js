import { useRouteMatch } from 'react-router-dom'

export const useRoutes = () => {
  let { path } = useRouteMatch()

  const ROUTES = {
    HAND_HOME: `${path}`,
    HAND_LOGIN: `${path}/login`
  }

  return ROUTES
}
