import Home from '../containers/Home'
// import NotFound from '../containers/NotFound'
import Another from '../containers/Another'

import { IRoute } from '../types'

export const routesArray: IRoute[] = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/:page',
    component: Home,
    exact: true,
  },
  {
    path: '/about',
    component: Another,
    exact: true,
  },
  // {
  //   path: '',
  //   component: NotFound,
  // },
]