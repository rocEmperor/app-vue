const App = () => import(/*webpackChunkName: "App"*/ '../App');
const Login = () => import(/*webpackChunkName: "Login"*/ '../components/Login/Login');
const Forget = () => import(/*webpackChunkName: "Forget"*/ '../components/Forget/Forget');

const context = require.context('./', true, /\.js$/);
const keys = context.keys().filter(item => item !== './index.js');
let routeList = [];
keys.forEach(item => {
  let route = context(item).default;
  if (route && Array.isArray(route)) {
    routeList = routeList.concat(route);
  }
});

const routes = [
  { 
    path: '/login', 
    component: Login
  },
  { 
    path: '/forget', 
    component: Forget
  },
  { 
    path: '/', 
    component: App,
    redirect: '/login',
    children: [ ...routeList ]
  }
]

export default routes;