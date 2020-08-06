/*
* 频率控制 返回函数连续调用时，fn 执行频率限定为每多少时间执行一次
* @param fn {function}  需要调用的函数
* @param delay  {number}    延迟时间，单位毫秒
* @param type  
				true   则是第一次点击后 后续延迟事件不触发
				false  则是delay事件内多次点击,等操作停下才会触发最后一次
* @return {function}实际调用函数
*/
var timer = null;
var flag = {};
export function _(fn, delay, type) {
	var context = this,
		args = arguments,
		that = this;
	if (type) {
		if (flag[that]) {
			return;
		}
		flag[that] = true;
		fn.apply(context, args);
		setTimeout(function() {
			flag[that] = false;
		}, delay);
	} else {
		clearTimeout(timer);
		timer = setTimeout(function() {
			fn.apply(context, args);
		}, delay);
	}
}
