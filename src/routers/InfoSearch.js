const InfoSearchRoute = [
  {
    path: 'searchOwn', // 信息查询 -> 个人查询
    component: () => import(/*webpackChunkName: "SearchOwn"*/ '../components/InfoSearch/SearchOwn')
  },
  {
    path: 'intermediaryList', // 信息查询 -> 中介查询
    component: () => import(/*webpackChunkName: "IntermediaryList"*/ '../components/InfoSearch/IntermediaryList')
  }, 
  {
    path: 'streetList', // 信息查询 -> 街道查询
    component: () => import(/*webpackChunkName: "StreetList"*/ '../components/InfoSearch/StreetList') 
  },
  {
    path: 'streetCount', // 信息查询 -> 街道统计
    component: () => import(/*webpackChunkName: "StreetCount"*/ '../components/InfoSearch/StreetCount') 
  },
  {
    path: 'administrativeList', // 信息查询 -> 行政中心查询
    component: () => import(/*webpackChunkName: "AdministrativeList"*/ '../components/InfoSearch/AdministrativeList') 
  },
  {
    path: 'housingManagementList', // 信息查询 -> 房管中心查询
    component: () => import(/*webpackChunkName: "HousingManagementList"*/ '../components/InfoSearch/HousingManagementList') 
  }
]

export default InfoSearchRoute;