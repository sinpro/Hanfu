const host = {
	sat: 'http://www.baidusat.com',
	uat: 'http://www.baiduuat.com',
	dev: 'http://www.baidudev.com'
};
module.exports = {
	port: 8823,
	proxy: {
		'(/basic/**)|(/permission/**)|(/trade/**)': {
			target: host.uat,
			changeOrigin: true,
			pathRewrite: {
				'^/basic': ''
			}
		},
	},
	overLay: false,
	autoOpenBrowser: false,
	hot: true
}