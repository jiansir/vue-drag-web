const state = {
  pageData: {
    list: []
  },
  selectWg: []
};
const mutations = {
  setPageData(state, payload) {
    state.pageData = payload;
  },
  setSelectWg(state, payload) {
    state.selectWg = payload;
  }
};
const actions = {
  setPageData(context, payload) {
    context.commit("setPageData", payload);
  },
  setSelectWg(context, payload) {
    context.commit("setSelectWg", payload);
  }
};
export default {
  state,
  mutations,
  actions
};
