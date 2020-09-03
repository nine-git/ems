import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'post',
      component: () => import('@/components/MinePost'),
    },
    {
      path: '/minePost',
      name: 'mine',
      component: () => import('@/components/MinePost'),
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('@/components/Order'),
    },
    {
      path: '/havePaid',
      name: 'havePaid',
      component: () => import('@/components/HavePaid'),
    },
    {
      path: '/haveTimeout',
      name: 'haveTimeout',
      component: () => import('@/components/HaveTimeout'),
    },
    {
      path: '/cancel',
      name: 'cancel',
      component: () => import('@/components/Cancel'),
    },
    {
      path: '/serviceAgreement',
      name: 'serviceAgreement',
      component: () => import('@/components/ServiceAgreement'),
    },
    {
      path: '/paymentSuccess',
      name: 'paymentSuccess',
      component: () => import('@/components/PaymentSuccess'),
    },
    {
      path: '/logisticsDetails',
      name: 'logisticsDetails',
      component: () => import('@/components/LogisticsDetails'),
    },
  ]
})
