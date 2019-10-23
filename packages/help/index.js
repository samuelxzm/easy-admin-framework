import EaHelp from './src/index.vue'
EaHelp.install=(Vue)=>{
  Vue.component(EaHelp.name,EaHelp)
}
export default EaHelp