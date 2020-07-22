import React from 'react'
import { Route } from 'dva/router'

export default function SubRoutes({ routes, component: Component }) {
  return (
    <Route
      render={props => <Component {...props} routes={routes} />}
    />
  )
}
