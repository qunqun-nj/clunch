
// 弧形刻度尺

export default ['number', "json", 'string', 'color', '$rotate', function ($number, $json, $string, $color, $rotate) {
    return {
        attrs: {

            // 刻度尺开始角度和总度数
            begin: $number(0),
            deg: $number(Math.PI * 2),

            // 刻度尺颜色
            color: $color('black'),

            // 刻度尺圆心
            cx: $number(),
            cy: $number(),

            // 刻度尺半径
            radius: $number(),

            // 刻度尺小刻度位置：outer|inner
            "mark-direction": $string("outer"),

            // 刻度尺刻度文字的位置：mark|between
            "value-position": $string("mark"),

            // 值
            value: $json()

        },
        link(painter, attr) {

            let value = attr.value;

            painter.config({
                'lineWidth': 1,
                'fillStyle': attr.color,
                'strokeStyle': attr.color,
                'font-size': '12',
                'textAlign': 'center',
                'textBaseline': 'middle',
                "lineDash": []
            });

            // 先绘制弧度
            painter.beginPath().arc(attr.cx, attr.cy, attr.radius, attr.begin, attr.deg).stroke();

            let markNumber = attr["value-position"] == "mark" ? value.length : value.length + 1;

            // 绘制刻度
            let distanceDeg = attr.deg / (markNumber - 1);

            // 绘制刻度
            for (let i = 0; i < markNumber; i++) {
                painter.beginPath().moveTo(...$rotate(
                    attr.cx, attr.cy,
                    attr.begin + i * distanceDeg,
                    attr.cx + attr.radius, attr.cy
                )).lineTo(...$rotate(
                    attr.cx, attr.cy,
                    attr.begin + i * distanceDeg,
                    attr.cx + attr.radius + 5 * (attr["mark-direction"] == 'inner' ? -1 : 1), attr.cy
                )).stroke();
            }

            // 绘制刻度上的读数
            for (let i = 0; i < value.length; i++) {
                let curDeg = attr.begin + distanceDeg * (i + (attr["value-position"] == 'mark' ? 0 : 0.5));
                let textHelpDeg = curDeg % (Math.PI * 2);
                painter.fillText(value[i], ...$rotate(
                    attr.cx, attr.cy,
                    curDeg,
                    attr.cx + attr.radius + 15 * (attr["mark-direction"] == 'inner' ? -1 : 1), attr.cy
                ), curDeg + ((
                    textHelpDeg > 0 && textHelpDeg < Math.PI ||
                    textHelpDeg > -2 * Math.PI && textHelpDeg < -Math.PI
                ) ? -Math.PI * 0.5 : Math.PI * 0.5));
            }
        }
    };
}];
