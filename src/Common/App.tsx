import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import {routesArray} from './routes'
import { observer } from 'mobx-react'

const Routes: React.FC = observer(() => {
  console.log(
    typeof window === 'object'
      ? 'Rendering client-side'
      : 'Rendering server-side'
  )

  const routesMap = routesArray.map(({ path, component, exact }) => (
    <Route exact={exact} path={path} component={component} key={path} />
  ))

  return (
    <Switch>
      {routesMap}
    </Switch>
  )
})

//ADD hot reloading for dev
export default hot(module)(Routes)