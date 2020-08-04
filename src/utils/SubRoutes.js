import React from 'react'
import { Route, Redirect } from 'dva/router'
import NoMatch from '../components/NoMatch'
import dynamic from "dva/dynamic";
import { connect } from 'dva';

const dynamicCom = (app, models, component, routes, isAuthority, userInfo) =>
  dynamic({
    app,
    models: () => models,
    component: () =>
      component().then(res => {
        // console.log(isAuthority)
        if (isAuthority) {
          if(!userInfo.id){
            return () => <Redirect to="/login" />
          }
        }
        const Component = res.default || res;
        return props => <Component {...props} app={app} routes={routes} />
      })
  });

function SubRoutes({ routes, component, app, model, isAuthority, userInfo }) {
  console.log(userInfo);
  return <Route component={dynamicCom(app, model, component, routes, isAuthority, userInfo)} />;
}

export function RedirectRoute({ routes, from, exact }) {
  const routeR = routes.filter(item => {
    return item.redirect;
  })

  const to = routeR.length ? routeR[0].path : routes[0].path;
  return <Redirect exact={exact} from={from} to={to} />
}

export function NoMatchRoute({ status = 404 }) {
  return (
    <Route render={props => <NoMatch {...props} status={status} />} />
  )
}


export default connect(({global}) => ({
  userInfo: global.userInfo
}))(SubRoutes)