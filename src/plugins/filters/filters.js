/**
 * 过滤器
 * 
 */


/**
 * 前面加￥
 * @param string 数字
 */
export function FormatMoney(string) {
  var a = '￥' + string
  return a
}

/**
 * 性别icon切换
 * @param string 男|女|不限
 */
export function iconSex(string) {
  var icon = 'team'
  if(string == "男"){
    icon = 'man'
  }else if(string == "女"){
    icon = 'woman'
  }
  return icon
}