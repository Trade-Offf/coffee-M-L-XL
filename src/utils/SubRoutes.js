import React from "react";
import { Route } from "dva/router";
import dynamic from "dva/dynamic";

const dynamicCom =(app, models, component, routes) =>
 dynamic({
  app,
  models: () => models,
  component: () => 
    component().then(res => {
      // console.log(res)
      const Component = res.default || res;
      return props => <Component {...props} app={app} routes={routes} />
    })
});

export default function SubRoutes({ routes, component, app, model }) {
  return <Route component={dynamicCom(app, model, component, routes)} />;
}
