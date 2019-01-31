
let state = {
  formData: {
    password: '',
    name: ''
  }
};

const getters = {};

const actions = {
  submit () {
    window.location.href = '#/homePage';
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
  name: 'LoginStore',
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};