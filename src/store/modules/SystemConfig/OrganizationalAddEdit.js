const state = {
  formData: {
    outfit_name: '', // 机构名称
    outfit_type: '', // 机构类型
    people: '', // 联系人
    phone: '', // 手机号码
    loginNo: '', // 登录账号
    passwold: '', // 登录密码
    status: '' // 账号状态
  },
  outfit_options: [
    {
      label: '中介',
      value: '1'
    },
    {
      label: '街道',
      value: '2'
    },
    {
      label: '行政中心',
      value: '3'
    },
    {
      label: '房管中心',
      value: '4'
    }
  ],
  dataTree: [
    {
      id: 100,
      label: '全选',
      children: [
        {
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }
      ]
    }
  ],
  defaultChecked: [5]
};

const getters = {};

const actions = {

};

const mutations = {

};

export default {
  name: 'OrganizationalAddEditStore',
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};