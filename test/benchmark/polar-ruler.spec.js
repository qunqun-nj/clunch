JSLitmus.test('【内置组件】polar-ruler', function () {

    new Clunch({
        el: document.getElementById('polar-ruler'),
        template: "<polar-ruler cx='50' cy='50' radius='2' value='[1,2,3,4,5,6,7]' />"
    });

});
