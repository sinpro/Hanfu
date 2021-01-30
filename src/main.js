import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './store';
import obj from '../config/systemConfig'
// console.log(process.env.NODE_ENV)
// console.log(obj[process.env.NODE_ENV])
// console.log(obj)
// css入口
import './style/index.scss';

const root = document.createElement('div');
document.body.appendChild(root);
new Vue({
	router,
	store,
	render: c => c(App)
}).$mount(root);