const homePageRoute = [
  {
    path: 'homePage', // 首页
    component: () => import(/*webpackChunkName: "HomePage"*/ '../components/HomePage/HomePage')
  }
]

export default homePageRoute;