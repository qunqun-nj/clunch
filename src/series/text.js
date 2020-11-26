import { isFunction } from '@hai2007/tool/type';

// 文字

export default ['number', "string", "json", "color", function ($number, $string, $json, $color) {
    return {
        attrs: {
            'fill-color': $color('black'),
            'stroke-color': $color('black'),
            'font-size': $number(16)(true),
            'font-family': $string("sans-serif"),
            'line-width': $number(1),
            'align': $string('left'),
            'baseline': $string("middle"),
            type: $string('fill'),
            content: $string(null),
            x: $number()(true),
            y: $number()(true),
            deg: $number(0)(true),
            dash: $json([])
        },
        region: {
            default: function (render, attr) {
                render().config({
                    "font-size": attr['font-size'],
                    "font-family": attr['font-family'],
                    "lineWidth": attr['line-width'],
                    "textAlign": attr['align'],
                    "textBaseline": attr['baseline'],
                    "lineDash": attr.dash
                })[attr.type + "Text"]((attr.content + "").trim(), attr.x, attr.y, attr.deg);
            }
        },
        link(painter, attr) {

            if (attr.content == null) {
                attr.content = attr._subTexts.join('\n');
            }

            painter.config({
                "fillStyle": attr['fill-color'],
                "strokeStyle": attr['stroke-color'],
                "font-size": attr['font-size'],
                "font-family": attr['font-family'],
                "lineWidth": attr['line-width'],
                "textAlign": attr['align'],
                "textBaseline": attr['baseline'],
                "lineDash": attr.dash
            });

            let type = attr.type;

            if (isFunction(painter[type + "Text"])) {
                painter[type + "Text"]((attr.content + "").trim(), attr.x, attr.y, attr.deg);
            } else {
                // 错误提示
                throw new Error('Type error!' + JSON.stringify({ series: "text", type }));
            }
        }
    };
}];
