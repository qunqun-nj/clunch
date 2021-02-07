import Clunch from 'clunch';

// 定义组件
Clunch.series('ui-rects', ["number", "json", function ($number, $json) {
    return {
        // 定义属性
        attrs: {
            x: $number(0)(true),
            y: $number(0)(true),
            width: $number(700)(true),
            height: $number(360)(true),
            data: $json(),
            ruler: $json()
        },
        // 定义区域或子区域
        region: {
            default: function (render, attr) {

                 // 得出每个小条目的宽(包括了两边的留白)
            let disWidth = (attr.width - 100) / attr.data.length;

            for (let i = 0; i < attr.data.length; i++) {

                // 定义子区域
                render("no-"+i,{
                    // 记录当前的值
                    value:attr.data[i]
                })

                // 绘制子区域
                .fillRect(
                    attr.x + 50 + disWidth * (i + 0.1), attr.y + attr.height - 50,
                    disWidth * 0.8, -0.005 * attr.data[i] * (attr.height - 100)
                );

            }


            }
        },
        // 具体的绘制方法
        link(painter, attr) {

            // 得出每个小条目的宽(包括了两边的留白)
            let disWidth = (attr.width - 100) / attr.data.length;

            for (let i = 0; i < attr.data.length; i++) {

                // 背景灰色
                painter.config('fillStyle', 'rgba(220, 220, 220, 0.8)').fillRect(
                    attr.x + 50 + disWidth * (i + 0.1), attr.y + 50,
                    disWidth * 0.8, attr.height - 100
                );

                // 值红色
                painter.config('fillStyle', 'red').fillRect(
                    attr.x + 50 + disWidth * (i + 0.1), attr.y + attr.height - 50,
                    disWidth * 0.8, -0.005 * attr.data[i] * (attr.height - 100)
                );

            }

            // 横坐标
            this.$reuseSeriesLink('ruler', {
                attr: {
                    x: attr.x + 50,
                    y: attr.y + attr.height - 50,
                    length: attr.width - 100,
                    value: attr.ruler,
                    "value-position": 'between'
                }
            });

        }
    };
}]);
