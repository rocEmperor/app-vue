const App = () => import(/*webpackChunkName: "App"*/ './App');
const Login = () => import(/*webpackChunkName: "Login"*/ './components/Login/Login');
const Forget = () => import(/*webpackChunkName: "Forget"*/ './components/Forget/Forget');
const HomePage = () => import(/*webpackChunkName: "HomePage"*/ './components/HomePage/HomePage');
const SearchOwn = () => import(/*webpackChunkName: "SearchOwn"*/ './components/InfoSearch/SearchOwn');
const IntermediaryList = () => import(/*webpackChunkName: "IntermediaryList"*/ './components/InfoSearch/IntermediaryList');
const StreetList = () => import(/*webpackChunkName: "StreetList"*/ './components/InfoSearch/StreetList');
const StreetCount = () => import(/*webpackChunkName: "StreetCount"*/ './components/InfoSearch/StreetCount');
const AdministrativeList = () => import(/*webpackChunkName: "AdministrativeList"*/ './components/InfoSearch/AdministrativeList');
const HousingManagementList = () => import(/*webpackChunkName: "HousingManagementList"*/ './components/InfoSearch/HousingManagementList');
const OrganizationalManagement = () => import(/*webpackChunkName: "OrganizationalManagement"*/ './components/SystemConfig/OrganizationalManagement');
const OrganizationalAddEdit = () => import(/*webpackChunkName: "OrganizationalAddEdit"*/ './components/SystemConfig/OrganizationalAddEdit');

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
    children: [
      {
        path: 'homePage', // 首页
        component: HomePage
      }, 
      {
        path: 'searchOwn', // 信息查询 -> 个人查询
        component: SearchOwn
      },
      {
        path: 'intermediaryList', // 信息查询 -> 中介查询
        component: IntermediaryList
      }, 
      {
        path: 'streetList', // 信息查询 -> 街道查询
        component: StreetList 
      },
      {
        path: 'streetCount', // 信息查询 -> 街道统计
        component: StreetCount 
      },
      {
        path: 'administrativeList', // 信息查询 -> 行政中心查询
        component: AdministrativeList 
      },
      {
        path: 'housingManagementList', // 信息查询 -> 房管中心查询
        component: HousingManagementList 
      },
      {
        path: 'organizationalManagement', // 系统设置 -> 机构管理
        component: OrganizationalManagement 
      },
      {
        path: 'organizationalAddEdit', // 系统设置 -> 机构管理(新增&编辑)
        component: OrganizationalAddEdit 
      }
    ]
  }
]

export default routes;