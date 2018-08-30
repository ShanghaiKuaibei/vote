import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Coinmsg from '@/components/ciondetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index,
      meta: {title: '首页'}
    },
    {
      path: '/coinmsg/:name',
      name: '币详情',
      component: Coinmsg,
      meta: {title: '币详情页'}
    }

  ]
})
