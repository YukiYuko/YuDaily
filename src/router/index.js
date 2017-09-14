import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import Detail from '../pages/Detail'
import Theme from '../pages/Theme'
import Comment from '../pages/Comment'

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/theme/:id',
      name: 'theme',
      component: Theme
    },
    {
      path: '/comment/:id',
      name: 'comment',
      component: Comment
    }
  ]
})
