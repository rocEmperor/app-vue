const SystemConfigRoute = [
  {
    path: 'organizationalManagement', // 系统设置 -> 机构管理
    component: () => import(/*webpackChunkName: "OrganizationalManagement"*/ '../components/SystemConfig/OrganizationalManagement') 
  },
  {
    path: 'organizationalAddEdit', // 系统设置 -> 机构管理(新增&编辑)
    component: () => import(/*webpackChunkName: "OrganizationalAddEdit"*/ '../components/SystemConfig/OrganizationalAddEdit') 
  }
]

export default SystemConfigRoute;