import Loadable from 'react-loadable';
import Loading from 'components/load';
import MainLayout  from 'layouts/mainLayout';
import BottomLayout from 'layouts/bottomLayout';

const pageIndex=Loadable({loader:() => import('pages/pageIndex'),loading: Loading});
const pageGoods=Loadable({loader:() => import('pages/pageGoods'),loading: Loading});
const pageShopping=Loadable({loader:() => import('pages/pageShopping'),loading: Loading});
const page404=Loadable({loader:() => import('pages/404'),loading: Loading});
const routerConf = [
  {
    path: '/',
    layout: null,
    // component: BottomLayout
    redirect: '/pageIndex'
  },
  {
    path: '/pageIndex',
    layout: BottomLayout,
    component: pageIndex
  },
  {
    path: '/pageGoods',
    layout: BottomLayout,
    component: pageGoods
  },
  {
    path: '/pageShopping',
    layout: BottomLayout,
    component: pageShopping
  },
  {
    path: '*',
    layout: MainLayout,
    component: page404,
  }
]

export default routerConf;
