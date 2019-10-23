import FullScreen from './src/index.vue'
FullScreen.install=(Vue)=>{
  Vue.component(FullScreen.name,FullScreen)
}
export default FullScreen