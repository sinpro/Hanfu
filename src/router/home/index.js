export default [{ //首页
	path: '/home',
	name: 'Home',
	component: () =>
		import ('src/views/home/index.vue'),
	meta: {
		title: '首页',
		keepAlive: false,
		requireAuth: true,
		roles: ['admin', 'editor'],
	}
}, { //登录
	path: '/login',
	name: 'Login',
	component: () =>
		import ('src/views/home/Login.vue'),
	meta: {
		title: '登录',
		keepAlive: false,
		requireAuth: true,
		roles: ['admin', 'editor'],
	}
}, { //修改密码
	path: '/modPassword',
	name: 'ModPassword',
	component: () =>
		import ('src/views/home/modPassword.vue'),
	meta: {
		title: '修改密码',
		keepAlive: false,
		requireAuth: true,
		roles: ['admin', 'editor'],
	}
}, { //忘记密码
	path: '/forgetPassword',
	name: 'ForgetPassword',
	component: () =>
		import ('src/views/home/forgetPassword.vue'),
	meta: {
		title: '忘记密码',
		keepAlive: false,
		requireAuth: true,
		roles: ['admin', 'editor'],
	}
}]