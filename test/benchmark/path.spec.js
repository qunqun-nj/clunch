JSLitmus.test('【内置组件】path', function () {

    new Clunch({
        el: document.getElementById('path'),
        template: "<path><move-to x='0' y='0' /><line-to x='100' y='100' /></path>"
    });

});
