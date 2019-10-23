import SvgIcon from './src/index.vue' // svg component

SvgIcon.install = (Vue) => {
    Vue.component(SvgIcon.name, SvgIcon)
}

export default SvgIcon