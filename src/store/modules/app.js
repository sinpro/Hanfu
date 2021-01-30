import Cookies from 'js-cookie';
const app = {
	state: {
		loginstuts: '1'
	},
	mutations: {
		SET_LOGINSTUTS: (state, loginstuts) => {
			state.loginstuts = loginstuts;
		},
	},
	actions: {

	}
}
export default app;