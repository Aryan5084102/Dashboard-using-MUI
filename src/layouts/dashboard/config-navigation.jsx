import SvgColor from 'src/components/svg-color';


const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Dashboard(Inward Transaction)',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Dashboard(Outward Transaction)',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Other Report',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'Graphs Report',
    path: '/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'Check FX Rate',
    path: '/login',
    icon: icon('ic_lock'),
  },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
