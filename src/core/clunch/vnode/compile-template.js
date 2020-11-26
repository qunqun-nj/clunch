
import xhtmlToJson from '@hai2007/algorithm/xhtmlToJson.js';

// 模板解析者
// (render生成器)

export default function (template) {

    let xhtmlJson = xhtmlToJson("<clunch>" + template + "</clunch>");

    return (function doit(pNode) {

        let temp = [];
        for (let i = 0; i < pNode.childNodes.length; i++) {
            let node = xhtmlJson[pNode.childNodes[i]];
            temp.push({
                attr: node.attrs,
                children: doit(node)
            });
        }

        return temp;

    })(xhtmlJson[0]);

};
