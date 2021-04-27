import VueRouter from 'vue-router'
import Vue from 'vue'
// 普通的路由跳转写法
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

// 为什么要使用路由懒加载？路由懒加载可以让打包的js文件模块化区分，用户进入页面时可以按需加载js文件了，实现性能优化

//结合Vue异步组件和Wenpack的代码分析懒加载方法
//const Home = resolve => {require.ensure(['../components/Home.vue'], () => {resolve(require('../components/Home.vue')) })}

//AMD懒加载写法
//const Home = resolve => require(['../components/Home'], resolve)

// 路由懒加载写法 ，在ES6中，组织Vue异步组件和Webpack的代码分割/强烈推荐的写法
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')
const HomeMessage = () => import('../components/HomeMessage')
const HomeNews = () => import('../components/HomeNews')

// 1. 通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

// 2.创建VueRouter路由对象
const routes = [
  {
    path: '',
    // redirect重定向（默认路径）
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: 'Home'
    },
    children: [
      {
        path: '/home/homeMessage',
        component: HomeMessage,
        meta: {
          title: 'HomeMessage'
        }
      },
      {
        path: '/home/homeNews',
        component: HomeNews,
        meta: {
          title: 'HomeNews'
        }
      }
    ]
  },
  {
    path: '/about/:userIds',
    component: About,
    meta: {
      title: 'About'
    }
  },
  {
    path: '/user/:userIds',// 动态路由 this.$route.params
    component: () => import('../components/User'),
    meta: {
      title: 'User'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: 'Profile'
    }
  }
]
const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  // 去除哈希#
  mode: 'history',
  // 统一修改class样式
  linkActiveClass: 'active'
})

// 前置钩子(guard) router全局守卫 
router.beforeEach((to, from, next) => {
  // 从from跳转到to
  document.title = to.matched[0].meta.title // mete(元数据)修改路由title a Name
  next()
})

// 后置钩子(hook) router全局守卫 
router.afterEach((to, from) => {

})

// 3.将router对象传入到Vue实例
export default router
