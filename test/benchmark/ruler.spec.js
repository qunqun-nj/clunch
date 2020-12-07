JSLitmus.test('【内置组件】ruler', function () {

    new Clunch({
        el: document.getElementById('ruler'),
        template: "<ruler x='0' y='50' length='100' value='[1,2,3,4,5,6,7]' />"
    });

});
