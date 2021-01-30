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
		router.push('home')
	} else {
		router.push('login')
	}

	console.log(to, from, next)
	next()
})
export default router;