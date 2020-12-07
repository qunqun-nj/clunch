JSLitmus.test('【内置组件】text', function () {

    new Clunch({
        el: document.getElementById('text'),
        template: "<text x='50' y='50' content='文字' />"
    });

});
