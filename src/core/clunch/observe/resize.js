
// 监听画布大小改变

export default function (that) {

    try {

        that.__resizeObserver = new ResizeObserver(() => {

            that.$$updateWithSize();

        });

        // 监听
        that.__resizeObserver.observe(that.__el);

    } catch (e) {

        that.$$updateWithSize();

        // 如果浏览器不支持此接口
        console.info(e);
        console.error('ResizeObserver undefined!');

    }

};
