import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthContext from '../../context/authContext.js'
import { useRoutesAndComponents } from '../routes'
import { useRoutes } from '../constants.js'

const Entry = () => {
  const { getCurrentUser } = useContext(AuthContext)
  const { HAND_LOGIN, HAND_HOME } = useRoutes()
  const routes = useRoutesAndComponents()
  return (
    <Switch>
      {routes.map((route, indx) => {
        if (
          route.path !== HAND_LOGIN &&
          route.path.includes(HAND_HOME) &&
          !getCurrentUser() &&
          !route.path.includes('password') &&
          !route.path.includes('reset')
        ) {
          return (
            <Route path={route.path} exact={route.exact} key={indx}>
              <Redirect to={HAND_LOGIN} />
            </Route>
          )
        } else {
          return (
            <Route
              path={route.path}
              exact={route.exact}
              key={indx}
              component={route.component}
            />
          )
        }
      })}
    </Switch>
  )
}

export default Entry
