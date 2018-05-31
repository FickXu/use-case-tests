import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

/* 导入异步组件块 */
import One from '../chunks/chunk-one/index'
import Two from '../chunks/chunk-two/index'
import TestPage from '../chunks/test-router/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/One',
      name: 'test1',
      component: One.Test1
    },
    {
      path: '/Two',
      name: 'test2',
      component: One.Test2
    },
    {
      path: '/Three',
      name: 'test3',
      component: One.Test3
    },
    {
      path: '/Four',
      name: 'test4',
      component: Two.Test4
    },
    {
      path: '/Five',
      name: 'test5',
      component: Two.Test5
    },
    {
      path: '/test/*',
      name: 'testpage',
      component: TestPage
    }
  ]
})
