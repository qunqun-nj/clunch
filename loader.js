const { xhtmlToJson } = require('@hai2007/algorithm');

// clunch-loader

module.exports = function loader(template) {

    let xhtmlJson = xhtmlToJson("<clunch>" + template + "</clunch>");

    let resultRender = (function doit(pNode) {

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

    return `
    export default ${JSON.stringify(resultRender)};
`;

};
