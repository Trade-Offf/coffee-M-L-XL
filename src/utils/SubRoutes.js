import React from 'react'
import { Route, Redirect } from 'dva/router'
import NoMatch from '../components/NoMatch'

export default function SubRoutes({ routes, component: Component }) {
  return (
    <Route
      render={props => <Component {...props} routes={routes} />}
    />
  )
}

export function RedirectRoute({ routes, from, exact }) {
  const routeR = routes.filter(item => {
    return item.redirect;
  })

  const to = routeR.length ? routeR[0].path : routes[0].path;
  return <Redirect exact={exact} from={from} to={to} />
}

export function NoMatchRoute({ status=404 }) {
  return (
    <Route
      render={props => <NoMatch {...props} status={status} />}
    />
  )
}
