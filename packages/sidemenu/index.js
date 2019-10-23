import SideMenu from './src/index.vue'
SideMenu.install=(Vue)=>{
  Vue.component(SideMenu.name,SideMenu)
}
export default SideMenu