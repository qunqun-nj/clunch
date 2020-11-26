import { isFunction } from '@hai2007/tool/type';

// 路径

export default ["number", "string", "boolean", "json", "color", function ($number, $string, $boolean, $json, $color) {
    return {
        attrs: {
            'fill-color': $color('black'),
            'stroke-color': $color('black'),
            'line-width': $number(1)(true),
            dash: $json([]),
            type: $string('stroke'),
            close: $boolean(false)
        },
        subAttrs: {
            "move-to": {
                'x': $number()(true),
                'y': $number()(true)
            },
            "line-to": {
                'x': $number()(true),
                'y': $number()(true)
            },
            "bezier-to": {
                'x': $number()(true),
                'y': $number()(true),
                'cp1x': $number()(true),
                'cp1y': $number()(true),
                'cp2x': $number(null)(true),
                'cp2y': $number(null)(true)
            }
        },
        link(painter, attr) {

            painter.config({
                "fillStyle": attr['fill-color'],
                "strokeStyle": attr['stroke-color'],
                "lineWidth": attr['line-width'],
                "lineDash": attr.dash
            });

            painter.beginPath();

            // 获取子标签的数量并循环画出线条
            for (let i = 0; i < attr._subAttr.length; i++) {

                // 判断子标签所表示要画的线
                if (attr._subAttr[i].series == 'move-to') {

                    painter.moveTo(attr._subAttr[i].attr.x, attr._subAttr[i].attr.y);

                } else if (attr._subAttr[i].series == 'line-to') {

                    painter.lineTo(attr._subAttr[i].attr.x, attr._subAttr[i].attr.y);

                } else if (attr._subAttr[i].series == 'bezier-to') {

                    // 二次
                    if (attr._subAttr[i].attr.cp2x == null && attr._subAttr[i].attr.cp2y == null) {

                        painter.quadraticCurveTo(
                            attr._subAttr[i].attr.cp1x, attr._subAttr[i].attr.cp1y,
                            attr._subAttr[i].attr.x, attr._subAttr[i].attr.y
                        );

                    }

                    // 三次
                    else {
                        painter.bezierCurveTo(
                            attr._subAttr[i].attr.cp1x, attr._subAttr[i].attr.cp1y,
                            attr._subAttr[i].attr.cp2x, attr._subAttr[i].attr.cp2y,
                            attr._subAttr[i].attr.x, attr._subAttr[i].attr.y
                        );

                    }
                }

            }

            // 是否需要闭合
            if (attr.close) painter.closePath();

            let type = attr.type;

            if (isFunction(painter[type])) {
                // 画出图形
                painter[type]();
            } else {
                throw new Error('Type error!' + JSON.stringify({ series: "path", type }));
            }

        }
    };
}];
