import { isFunction } from '@hai2007/tool/type';

// 圆

export default ['number', "json", "string", 'color', function ($number, $json, $string, $color) {
    return {
        attrs: {
            'fill-color': $color('black'),
            'stroke-color': $color('black'),
            'line-width': $number(1),
            dash: $json([]),
            type: $string('fill'),
            cx: $number()(true),
            cy: $number()(true),
            radius: $number()(true)
        },
        region: {
            default: function (render, attr) {
                render().config({
                    "lineWidth": attr['line-width'],
                    "lineDash": attr.dash
                })[attr.type + "Circle"](attr.cx, attr.cy, attr.radius);
            }
        },
        link(painter, attr) {

            painter.config({
                "fillStyle": attr["fill-color"],
                "strokeStyle": attr["stroke-color"],
                "lineWidth": attr["line-width"],
                "lineDash": attr.dash
            });
            let type = attr.type;
            if (isFunction(painter[type + "Circle"])) {
                painter[type + "Circle"](attr.cx, attr.cy, attr.radius);
            } else {
                throw new Error('Type error!' + JSON.stringify({ series: "circle", type }));
            }
        }

    }
}];
