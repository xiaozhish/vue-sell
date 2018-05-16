import Vue from 'vue';
import Router from 'vue-router';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';
import payment from 'components/payment';
import orderList from 'components/order/list';
import orderDetail from 'components/order/detail';

Vue.use(Router);

const routes = [{
  path: '/',
  redirect: '/goods'
}, {
  path: '/goods',
  component: goods
}, {
  path: '/ratings',
  component: ratings
}, {
  path: '/seller',
  component: seller
}, {
  path: '/payment',
  component: payment
}, {
  path: '/order',
  component: orderList
}, {
  path: '/order/:orderId',
  component: orderDetail
}];

export default new Router({
    linkActiveClass: 'active',
    routes
});
