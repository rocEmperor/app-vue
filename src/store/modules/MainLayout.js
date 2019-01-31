
let state = {
  menuList: [
    {
      id: '00', 
      menuName: '信息查询', 
      menuIcon: 'el-icon-search',
      children: [
        { id: '0001', menuName: '个人查询', menuUrl: 'searchOwn'},
        { id: '0002', menuName: '中介查询', menuUrl: 'intermediaryList'},
        { id: '0003', menuName: '街道查询', menuUrl: 'streetList'},
        { id: '0004', menuName: '街道统计', menuUrl: 'streetCount'},
        { id: '0005', menuName: '行政中心查询', menuUrl: 'administrativeList'},
        { id: '0006', menuName: '房管中心查询', menuUrl: 'housingManagementList'}
      ]
    },
    {
      id: '01', 
      menuName: '系统设置', 
      menuIcon: 'el-icon-setting',
      children: [
        { id: '0101', menuName: '机构管理', menuUrl: 'organizationalManagement'}
      ]
    }
  ],
  defaultActive: '',
  defaultOpeneds: [],
  dialogVisible: false,
  formData: {
    old: '',
    new: '',
    newAgain: ''
  }
};

const getters = {};

const actions = {
  init (store, { payload }) {
    store.commit({
      type: 'concat',
      payload: payload
    });
  }
};

const mutations = {
  concat (state, { payload }) {
    let keys = Object.keys(payload);
    keys.forEach((item) => {
      state[item] = payload[item];
    });
  }
};

export default {
  name: 'MainLayoutStore',
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};