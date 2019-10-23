import EaSearch from './src/index.vue'
EaSearch.install=(Vue)=>{
  Vue.component(EaSearch.name,EaSearch)
}
export default EaSearch