import Tagview from './src/index.vue'
Tagview.install=(Vue)=>{
  Vue.component(Tagview.name,Tagview)
}
export default Tagview