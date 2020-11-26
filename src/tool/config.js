
// 初始化配置文件

export let initConfig = function (init, data) {
    for (let key in data)
        try {
            init[key] = data[key];
        } catch (e) {
            throw new Error("Illegal property value！");
        }
    return init;
};

// 正则表达式

export const REGEXP = {

    // 空白字符:http://www.w3.org/TR/css3-selectors/#whitespace
    "whitespace": "[\\x20\\t\\r\\n\\f]"

};

// 判断是否是一个合法的方法名或变量名

export let isValidKey = function (key) {

    // 判断是不是_或者$开头的
    // 这两个内部预留了
    if (/^[_$]/.test(key)) {
        console.warn('The beginning of _ or $ is not allowed：' + key);
    }

};
