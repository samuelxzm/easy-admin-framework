
import Vue from 'vue'
import Router from 'vue-router'
const path = require('path')
// const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// export default new Router({
//   routes: routes
// })
function routerSet(routerList) {

  let constantRoutes = []
  if (routerList.routerApi !== false) {
    constantRoutes = routerList.routerList

  }
  else {
    constantRoutes = routerList.routerList
  }
  constantRoutes.unshift({

        path: '/redirect/:path*',
        component: () => import('./redirect/index')

  })

  const createRouter = () => new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })
  return createRouter()
}
export default routerSet