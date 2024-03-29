import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import Ea from '../../packages'
Vue.use(Vuex)
const modulesFiles = require.context('./modules', true, /\.js$/)
let modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
modules['tagsView']=Ea.TagviewStore
modules['settings']=Ea.PagesettingStore
const store = new Vuex.Store({
modules,
getters
})

export default store