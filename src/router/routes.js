import home from './home';
export default [{
		path: '/',
		redirect: {
			name: 'Home'
		}
	},
	...home
];