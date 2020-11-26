
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
