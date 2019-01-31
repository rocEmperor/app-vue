
let tableData = [];
for(let i = 1; i < 34; i++) {
  tableData.push({
    key: `${i}`,
    date: '2016-05-02',
    should: '100.00',
    had_pay: '20.33',
    owe: '20.55',
    name: '西溪北苑',
    home_info: '30幢3单元306'
  })
}
const state = {
  currentData: [],
  currentPage: 1,
  rows: 10,
  totals: 33,
  searchList: {
    village_name: '',
    no: '',
    name: '',
    date: ''
  },
  village_options: [
    {
      value: '1',
      label: '西溪北原'
    },
    {
      value: '2',
      label: '西溪东苑'
    },
    {
      value: '3',
      label: '西溪南苑'
    },
    {
      value: '4',
      label: '西溪西苑'
    }
  ]
}

const getters = {};

const actions = {
  reqData (store, params) {
    let { commit } = store;
    let { page, rows } = params.payload;
    let currentData = [];
    tableData.map((item, index) => {
      let idx = index + 1;
      let base = (page - 1) * rows;
      if (idx >= (base + 1) && idx <= (base + 10)) {
        currentData.push(item);
      }
    })
    commit({
      type: 'concat',
      payload: {
        currentData: [ ...currentData ]
      }
    })
  }
}

const mutations = {
  concat (state, { payload }) {
    let keys = Object.keys(payload);
    keys.forEach((item) => {
      state[item] = payload[item];
    })
  }
}

export default {
  name: 'HousingManagementListStore',
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}