import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载文件
const DefaultPage = ()=> import('views/DefaultPage')
const Event = ()=> import('views/jpy/event/Eventmain')
const Flow = ()=> import('views/jpy/flow/Flowmain')
const Enterprise = ()=> import('views/jpy/enterprise/enterprisemain')
const City = ()=> import('views/jpy/city/citymain')

//1.安装路由插件
Vue.use(VueRouter)

//2.创建路由对象
const routes = [
  {
    path: '',
    redirect: '/default'
  },
  {
    path: '/default',
    component: DefaultPage
  },
  {
    path: '/event',
    component: Event
  },
  {
    path: '/flow',
    component: Flow
  },
  {
    path: '/enterprise',
    component: Enterprise
  },
  {
    path: '/city',
    component: City
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//3.导出路由对象
export default router
