// const api_base_url = 'http://localhost:5000/';
// const api_base_url = 'http://47.100.200.167:5000/';
const api_base_url = 'https://api.zhouwangfei.top/';
const config = {
	api_base_url,
	cdn: 'https://cdn.momsurprise.com/',
	amapKey: '3bb4ecc65a12bec965609949a7ac0204', //高德key
	// 为true开启模拟数据
	debug: false,
	// 接口正确返回的code码
	successCode:'00000000',
	// 登录失效code码
	loginFailCode:'501',
	// 登录界面的位置
	loginRoute:'subpackages/common/login/main/index'

};

export { config };
