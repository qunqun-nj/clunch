
// 直线刻度尺

export default ['number', "json", 'string', 'color', '$dot', function ($number, $json, $string, $color, $dot) {
    return {
        attrs: {

            // 刻度尺的起点位置
            x: $number(),
            y: $number(),

            // 刻度尺的方向：LR|RL|TB|BT
            direction: $string("LR"),

            // 刻度尺的长度
            length: $number(),

            // 刻度尺小刻度在前进方向的位置：right|left
            "mark-direction": $string("right"),

            // 刻度尺刻度文字的位置：mark|between
            "value-position": $string("mark"),

            // 刻度尺颜色
            color: $color('black'),

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
                'textAlign': (attr.direction == 'LR' || attr.direction == 'RL') ? 'center' : (
                    (
                        (attr.direction == 'BT' && attr["mark-direction"] == 'right') ||
                        (attr.direction == 'TB' && attr["mark-direction"] == 'left')
                    ) ? 'left' : 'right'
                ),
                "lineDash": [],
                'textBaseline': 'middle'
            });

            // 刻度尺终点坐标
            let endPosition;

            // 记录小刻度如何计算
            let dxy;

            if (attr.direction == 'LR') {
                endPosition = {
                    x: attr.x + attr.length,
                    y: attr.y
                };
                dxy = attr["mark-direction"] == 'right' ? [0, 1] : [0, -1];
            } else if (attr.direction == 'RL') {
                endPosition = {
                    x: attr.x - attr.length,
                    y: attr.y
                };
                dxy = attr["mark-direction"] == 'right' ? [0, -1] : [0, 1];
            } else if (attr.direction == 'TB') {
                endPosition = {
                    x: attr.x,
                    y: attr.y + attr.length
                };
                dxy = attr["mark-direction"] == 'right' ? [-1, 0] : [1, 0];
            } else if (attr.direction == 'BT') {
                endPosition = {
                    x: attr.x,
                    y: attr.y - attr.length
                };
                dxy = attr["mark-direction"] == 'right' ? [1, 0] : [-1, 0];
            } else {

                // 错误提示
                throw new Error('Type error!' + JSON.stringify({ series: "ruler", type }));
            }

            // 绘制主轴
            painter.beginPath().moveTo(attr.x, attr.y).lineTo(endPosition.x, endPosition.y).stroke();

            let markNumber = attr["value-position"] == "mark" ? value.length : value.length + 1;

            // 绘制刻度
            let distanceLength = attr.length / (markNumber - 1);

            let dot = $dot({
                d: [
                    endPosition.x - attr.x,
                    endPosition.y - attr.y
                ],
                p: [
                    attr.x,
                    attr.y
                ]
            });

            for (let i = 0; i < markNumber; i++) {

                // 刻度
                let markPosition = dot.value();
                painter.beginPath().moveTo(...markPosition).lineTo(
                    markPosition[0] + dxy[0] * 5,
                    markPosition[1] + dxy[1] * 5
                ).stroke();

                dot.move(distanceLength);
            }

            // 绘制刻度上的读数
            dot = $dot({
                d: [
                    endPosition.x - attr.x,
                    endPosition.y - attr.y
                ],
                p: [
                    attr.x,
                    attr.y
                ]
            });

            if (attr["value-position"] == "between") dot.move(distanceLength * 0.5);

            for (let i = 0; i < value.length; i++) {
                let markPosition = dot.value();
                painter.fillText(value[i], markPosition[0] + dxy[0] * 15, markPosition[1] + dxy[1] * 15);
                dot.move(distanceLength);
            }

        }
    };
}];
