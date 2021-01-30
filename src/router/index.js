import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import routes from './routes';
import store from '../store'
const router = new Router({
	mode: 'hash',
	scrollBehavior: () => ({
		x: 0,
		y: 0
	}),
	routes
})

// console.log(store, 'loginstuts:state =>state.app.loginstuts')
router.beforeEach((to, from, next) => {
	if (store._modules.root.state.app.loginstuts == 1) {
		console.log(router)
		next({
			path: '/home', // 将跳转的路由path作为参数，登录成功后跳转到该路由
			query: { redirect: '11' }
		})
	} else {

		next({
			path: '/login', // 将跳转的路由path作为参数，登录成功后跳转到该路由
			query: { redirect: '11' }
		})

	}

	console.log(to, from, next)
	next()
})
export default router;