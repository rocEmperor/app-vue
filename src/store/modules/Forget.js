
let state = {
  formData: {
    old: '',
    new: '',
    newAgain: ''
  }
}

const getters = {};

const actions = {
  submit () {
    window.location.href = '#/login';
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
  name: 'ForgetStore',
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}