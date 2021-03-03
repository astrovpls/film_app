import Home from '../components/containers/Home'
import NotFound from '../components/ui/NotFound/'
import Another from '../components/containers/Another'

export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/about',
    component: Another,
    exact: true,
  },
  {
    path: '',
    component: NotFound,
  },
]
