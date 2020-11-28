
import xhtmlToJson from '@hai2007/algorithm/xhtmlToJson.js';

// 模板解析者
// (render生成器)

export default function (template) {

    let xhtmlJson = xhtmlToJson("<clunch>" + template + "</clunch>");

    return (function doit(pNode) {

        let temp = [];
        for (let i = 0; i < pNode.childNodes.length; i++) {
            let node = xhtmlJson[pNode.childNodes[i]];
            if (node.type == 'tag') {
                temp.push({
                    name: node.name,
                    attrs: node.attrs,
                    children: doit(node)
                });
            } else {
                temp.push(node.content.trim());
            }
        }

        return temp;

    })(xhtmlJson[0]);

};
