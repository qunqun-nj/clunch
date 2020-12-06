import iCrush from 'icrush';

let doit = function (el, binding) {

    if (binding.value == binding.type) {
       el.setAttribute('isactive','yes');
    } else {
        el.setAttribute('isactive','no');
    }

}

iCrush.directive('uiActive', {

    inserted: doit,
    update: doit

});