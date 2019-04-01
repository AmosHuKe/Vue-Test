/**
 * 公共方法
 */
export default {
    /**
     * 获取当前时间
     * 格式YYYY-MM-DD
     */
    getNowTime () {
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        var strHH = date.getHours();
        var strmm = date.getMinutes();
        var strdd = date.getSeconds();

        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        if (strHH >= 0 && strHH <= 9) {
            strHH = "0" + strHH;
        }
        if (strmm >= 0 && strmm <= 9) {
            strmm = "0" + strmm;
        }
        if (strdd >= 0 && strdd <= 9) {
            strdd = "0" + strdd;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                + " " + strHH + seperator2 + strmm
                + seperator2 + strdd;
        return currentdate;
    }
}