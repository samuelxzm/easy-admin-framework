import SideMenu from "./sidemenu"
import Layout from "./layout"
import Header from "./header"
import Tagview from "./tagview"
import TagviewStore from './tagview/src/store'
import PagesettingStore from './pagesetting/src/store'
import RouterSet from "./routerset"
import SvgIcon from './svgicon'
import EaFullscreen from './fullscreen'
import EaHelp from './help'
import EaUsercenter from './usercenter'
import EaPagesetting from './pagesetting'
import EaRefresh from './refresh'
import EaSearch from './search'
const components = [
    SideMenu,
    Layout,
    Header,
    Tagview,
    SvgIcon,
    EaFullscreen,
    EaHelp,
    EaUsercenter,
    EaPagesetting,
    EaRefresh,
    EaSearch
]
const install = function(Vue) {
    if (install.installed) return
    install.installed = true
    components.map(component => {
        Vue.component(component.name, component)
    })
}
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
export default {
    install,
    RouterSet,
    TagviewStore,
    PagesettingStore,
    ...components
}