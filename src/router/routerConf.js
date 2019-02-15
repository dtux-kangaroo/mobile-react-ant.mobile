import Loadable from 'react-loadable';
import Loading from 'components/load';
import MainLayout from 'layout/mainLayout';

const MainAnalyse = Loadable({
  loader: () => import('pages/mainAnalyse'),
  loading: Loading
});
const GoodsAnalysis = Loadable({
  loader: () => import('pages/goodsAnalysis'),
  loading: Loading
});
const BrandAnalysis = Loadable({
  loader: () => import('pages/brandAnalysis'),
  loading: Loading
});
const MemberAnalysis = Loadable({
  loader: () => import('pages/memberAnalysis'),
  loading: Loading
});

const routerConf = [{
    path: '/',
    layout: null,
    redirect: '/main-analyse'
  },
  {
    path: '/main-analyse',
    layout: MainLayout,
    component: MainAnalyse,
  },
  {
    path: '/brand-analyse',
    layout: MainLayout,
    component: BrandAnalysis
  },
  {
    path: '/goods-analyse',
    layout: MainLayout,
    component: GoodsAnalysis
  },
  {
    path: '/member-analyse',
    layout: MainLayout,
    component: MemberAnalysis
  }
]

export default routerConf;