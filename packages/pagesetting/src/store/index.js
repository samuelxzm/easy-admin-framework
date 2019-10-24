
import Cookies from 'js-cookie'

const state = {
  sidebarOpened: Cookies.get('sidebarOpened') ? !!+Cookies.get('sidebarOpened') :true,
 // showSettings: Cookies.get('showSettings') ? !!+Cookies.get('showSettings') : true,
  tagsView: Cookies.get('tagsView') ? !!+Cookies.get('tagsView') :true,
  fixedHeader: Cookies.get('fixedHeader') ? !!+Cookies.get('fixedHeader') : true,
  sidebarLogo: Cookies.get('sidebarLogo') ? !!+Cookies.get('sidebarLogo') :true,
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value
      if (value) {
        Cookies.set(key, 1)
      }
      else {
        Cookies.set(key, 0)
      }
    }
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
