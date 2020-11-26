
// 引入第三方提供的服务
import animation from '@hai2007/tool/animation';

// 引入内置的常规服务
import cardinal from './$cardinal';
import { formatColor, getRandomColors } from './$color';
import tree from './$tree';
import { dot, rotate, move, scale } from './$transform';

/**
 * 把类似
 * ['server1',...,function(server1,...){
 *      return function(){
 *          // todo
 *      }
 * }]
 * 解析成函数返回。
 */

export default function (inputArray) {

    let methodServers = [];
    for (let i = inputArray.length - 2; i >= 0; i--) {

        // 如果是特殊的类型服务
        if (['boolean', 'number', 'json', 'string', 'color', 'any'].indexOf(inputArray[i]) > -1) {

            // type(默认值)(true)
            methodServers.unshift(function (value) {

                // 如果没有默认值就是必输的
                let required = arguments.length > 0 ? false : true;

                return function (needAnimation) {

                    // 最后返回属性分析结果
                    return {
                        type: inputArray[i],
                        required,
                        animation: needAnimation,
                        default: value
                    };

                };

            });

        }

        //  否则就是普通服务
        else {
            methodServers.unshift({
                "$animation": animation,
                "$cardinal": cardinal,
                "$formatColor": formatColor,
                "$getRandomColors": getRandomColors,
                "$tree": tree,
                "$dot": dot,
                "$rotate": rotate,
                "$move": move,
                "$scale": scale
            }[inputArray[i]]);
        }
    }

    return inputArray[inputArray.length - 1].apply(this, methodServers);

};
