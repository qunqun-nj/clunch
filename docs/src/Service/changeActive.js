import xhtml from '@hai2007/tool/xhtml';
export default function (className, tagetClass) {

    let nodes = xhtml.find(document.getElementById('root'), node => xhtml.hasClass(node, className));
    for (let i = 0; i < nodes.length; i++) nodes[i].setAttribute('active', 'no');

    let node = xhtml.find(document.getElementById('root'), node => xhtml.hasClass(node, [className, tagetClass]))[0];
    node.setAttribute('active', 'yes');
};
