import Loadable from 'react-loadable';
import Loading from 'components/load';
import MainLayout from 'layout/mainLayout';
import BottomLayout from 'layout/bottomLayout';

const PageIndex = Loadable({
  loader: () => import('pages/pageIndex'),
  loading: Loading
});
//const pageGoods=Loadable({loader:() => import('pages/pageGoods'),loading: Loading});
//const pageShopping=Loadable({loader:() => import('pages/pageShopping'),loading: Loading});
//const page404=Loadable({loader:() => import('pages/404'),loading: Loading});
const routerConf = [{
    path: '/',
    layout: null,
    redirect: '/index'
  },
  {
    path: '/index',
    layout: MainLayout,
    component: PageIndex,
  }
  //  
  // {
  //   path: '*',
  //   layout: MainLayout,
  //   component: page404,
  // }
]

export default routerConf;