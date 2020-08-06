/**
        * name             '参数名称'
        * map              ‘参数映射’.map为传入后台的参数
        * empty            '参数不能为空, 为空就提示错误语'
        * value            ‘当参数没填或没有时候，填写默认的值’
        * min               参数的最小值
        * minMsg            参数小于最小值提示语
        * max               参数的最大值
        * maxMsg            参数超过最大值提示语
        * remark           备注参数说明
        * 复杂型
        * length            1,2,3  逗号隔开则表示 只能为单个长度     ['12-14','14-16']长度为区间段
        * wordRule          对象形式，这个参数需要其他参数满足某个条件才能触发，并开启参数验证
        * validate    各种正则验证 phone (手机号)/tel(座机号)/idcard(身份证)/bank(银行卡号)
        *
 } */
export function authParam({ param, data, success, fail }) {
  data = data || {};
  let newParam = {};
  //判断是否要登录
  data.page && (newParam.page = data.page);
  data.keywords && (newParam.keywords = data.keywords);
  if (param) {
    for (let val of param) {
      //先实现关系映射
      if (val.map) {
        if (data[val.map] === 0) {
          newParam[val.name] = 0;
        } else if (data[val.map]) {
          newParam[val.name] = data[val.map];
        } else if (val.hasOwnProperty('value')) {
          newParam[val.name] = val.value;
        } else {
          newParam[val.name] = '';
        }
      } else {
        if (data[val.name] === 0) {
          newParam[val.name] = 0;
        } else if (data[val.name]) {
          newParam[val.name] = data[val.name];
        } else if (val.hasOwnProperty('value')) {
          newParam[val.name] = val.value;
        } else {
          newParam[val.name] = '';
        }
      }

      //判断参数是否为空
      if (val.empty) {
        //判断空需要的条件
        if (val.emptyCondition) {
          if (data[val.emptyCondition.name] == val.emptyCondition.value) {
            if (!newParam[val.name].emptyText(val.empty)) {
              fail(false);
              return false;
            }
          }
        } else {
          if (!newParam[val.name].emptyText(val.empty)) {
            fail(false);
            return false;
          }
        }
      }




      //要验证
      if (val.vali) {
        switch (val.vali) {
          case 'phone':
            if (!(newParam[val.name] + '').valiPhone()) {
              fail(false);
              return false;
            }
            break;
        }
      }
    }
  }
  success(newParam);
}
