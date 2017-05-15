import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Hello = resolve => require(['@/components/Hello'], resolve)
const Test = resolve => require(['@/components/Test'], resolve)
const Yutao = resolve => require(['@/components/Yutao'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test/:id',
      name: 'Test',
      components: {
        default: Test,
        a: Yutao
      }
    }
  ]
})
