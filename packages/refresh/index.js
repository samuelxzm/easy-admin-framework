import EaRefresh from './src/index.vue'
EaRefresh.install=(Vue)=>{
  Vue.component(EaRefresh.name,EaRefresh)
}
export default EaRefresh