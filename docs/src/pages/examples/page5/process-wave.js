
// 绘制具体的一条wave

let drawerWave = function ($rotate, cx, cy, radius, painter, rate, deep, help) {

    // wave的起点和终点
    let beginPoint = $rotate(cx, cy, (0.5 - rate) * Math.PI, cx + radius, cy);
    let endPoint = $rotate(cx, cy, (1.5 - rate) * Math.PI, cx + radius, cy);

    // wave由下半圆和波浪组成
    painter
        .beginPath()
        .moveTo(beginPoint[0], beginPoint[1])

        // 绘制半圆部分
        .arc(cx, cy, radius, (0.5 - rate) * Math.PI, 2 * rate * Math.PI)

        // 绘制波浪部分
        .bezierCurveTo(

            endPoint[0] + (beginPoint[0] - endPoint[0]) * 0.5 * deep, beginPoint[1] + radius * deep * help * (rate > 0.5 ? 1 - rate : rate),
            endPoint[0] + (beginPoint[0] - endPoint[0]) * 0.5 * (1 + deep), beginPoint[1] - radius * (1 - deep) * help * (rate > 0.5 ? 1 - rate : rate),

            // 上面是第一和第二个看着点，最后这个是终点，加上画笔开始位置作为起点
            beginPoint[0], beginPoint[1]
        )

        // 填充
        .fill();


};

// 波浪进度条

export default ['number', '$rotate', function ($number, $rotate) {
    return {
        attrs: {
            process: $number()(true),
            cx: $number()(true),
            cy: $number()(true),
            radius: $number()(true),
            deep: $number()(true)
        },
        link(painter, attr) {

            // 绘制三个背景圆
            [
                ['#fff7e9', attr.radius],
                ['#ffe1b1', attr.radius * 0.9],
                ['#ffffff', attr.radius * 0.78]
            ].forEach(item => {
                painter.config('fillStyle', item[0]).fillCircle(attr.cx, attr.cy, item[1]);
            });

            // 弧度进度
            painter.config({
                'fillStyle': '#ff7f08',
                "arc-start-cap": "round",
                "arc-end-cap": "round"
            }).fillArc(attr.cx, attr.cy, attr.radius * 0.78, attr.radius * 0.9, Math.PI * -0.5, -Math.PI * 2 * attr.process);

            // 波浪进度条
            let _deep = attr.deep, help = 1;

            if (_deep > 0.5) {
                _deep = _deep - 0.5;
                help = -1;
            }
            _deep *= 2;

            // 绘制内弧
            drawerWave($rotate, attr.cx, attr.cy, attr.radius * 0.6, painter.config('fillStyle', '#ff7f08'), attr.process, _deep, help);

            // 绘制外弧
            drawerWave($rotate, attr.cx, attr.cy, attr.radius * 0.6, painter.config('fillStyle', '#fead2e'), attr.process, _deep, -help);

        }
    };
}];
