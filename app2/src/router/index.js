const routes = [
  { path: '/', name: 'home', component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView') },
  { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView') },
];

export default routes;
