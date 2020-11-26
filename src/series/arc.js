import { isFunction } from '@hai2007/tool/type';

// 圆弧

export default ['number', "json", "string", "color", function ($number, $json, $string, $color) {
    return {
        attrs: {
            'fill-color': $color('black'),
            'stroke-color': $color('black'),
            'line-width': $number(1)(true),
            dash: $json([]),
            type: $string('fill'),
            cx: $number()(true),
            cy: $number()(true),
            radius1: $number()(true),
            radius2: $number()(true),
            begin: $number(0)(true),
            deg: $number()(true)
        },
        region: {
            default: function (render, attr) {
                render().config({
                    "lineWidth": attr['line-width'],
                    "lineDash": attr.dash
                })[attr.type + "Arc"](attr.cx, attr.cy, attr.radius1, attr.radius2, attr.begin, attr.deg);
            }
        },
        link(painter, attr) {

            // 配置画笔
            painter.config({
                "fillStyle": attr['fill-color'],
                "strokeStyle": attr['stroke-color'],
                "lineWidth": attr['line-width'],
                "lineDash": attr.dash
            });

            let type = attr.type;

            if (isFunction(painter[type + "Arc"])) {

                // 绘制
                painter[type + "Arc"](attr.cx, attr.cy, attr.radius1, attr.radius2, attr.begin, attr.deg);
            } else {

                // 错误提示
                throw new Error('Type error!' + JSON.stringify({ series: "arc", type }));
            }
        }
    };
}];
